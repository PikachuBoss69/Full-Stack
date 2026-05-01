const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")
const accountModel = require("../models/account.model")
const emailService = require("../services/nodemailer.service")
const mongoose = require("mongoose")

//Created to create custom errors full production level
const AppError = require("../utils/AppError");

async function createTransaction(req, res){
    try{

        
        const { fromAccount, toAccount, amount, idempotencyKey} = req.body;
        
        const { fromUserAccount, toUserAccount} = await validateRequest(fromAccount, toAccount, amount, idempotencyKey);

            const existing_transaction = await isTransactionAlreadyExist(idempotencyKey);

        //Used optional chaning here , for my own reminder as im forgetful about small things
        if (existing_transaction?.type === "ALREADY_COMPLETED") {
            return res.status(200).json({
                message: "Transaction already processed",
                transaction: existing_transaction.transaction
            });
        }
        if (existing_transaction?.type === "PENDING") {
            return res.status(200).json({
                message: "Transaction is still processing",
            });
        }
                        
        await checkAccountStatus(fromUserAccount, toUserAccount);

        await validateUserAccountBalance(fromUserAccount, amount);

        const session = await mongoose.startSession();
        let transaction;
        try {
            session.startTransaction();

            transaction = await executeTransactionFlow({
                fromAccount,
                toAccount,
                amount,
                idempotencyKey,
                session
            });

            await session.commitTransaction();
            session.endSession();

        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            throw err;
        }
        sendTransactionEmail({
            _email:req.user.email,
            _name:req.user.name,
            _amount:amount,
            _toAccount:toAccount
        }).catch(console.error);
        
        return res.status(201).json({
        message: "Transaction completed successfully",
        transaction: transaction
        })

    }catch(err){
        res.status(err.status || 400).json({
             message: err.message
        });
    }
    

}

async function createInitialFunding(req, res){
    try{

        const {toAccount, amount, idempotencyKey} = req.body;
        const userId = req.user._id;
        
        const {fromUserAccount, toUserAccount} = await validateInitialFunding({ toAccount, amount, idempotencyKey, userId});
        
        const session = await mongoose.startSession();
    let transaction;
    const fromAccount = fromUserAccount._id;
    try {
        session.startTransaction();
        
            transaction = await executeTransactionFlow({
                fromAccount,
                toAccount,
                amount,
                idempotencyKey,
                session
            });

            await session.commitTransaction();
            session.endSession();
            
        } catch (err) {
            await session.abortTransaction();
            session.endSession();
            throw err;
        }
        return res.status(201).json({
            message: "Initial funds transaction completed successfully",
            transaction: transaction
        });
   }catch(err){
        return res.status(err.status || 400).json({
            message: err.message
        });
   }
}

async function validateRequest(fromAccount, toAccount, amount, idempotencyKey){
    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
       throw new AppError("Missing required parameters", 400);
    }

    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount
    })

    const toUserAccount = await accountModel.findOne({
        _id: toAccount
    })

    if(!fromUserAccount || !toUserAccount){
        throw new AppError("Invalid fromAccount or toAccount", 400);
    }
    return { fromUserAccount, toUserAccount };

}

async function validateInitialFunding({ toAccount, amount, idempotencyKey, userId }) {
    if (!toAccount || !amount || !idempotencyKey) {
        throw new AppError("Missing required parameters", 400);
    }

    const toUserAccount = await accountModel.findById(toAccount);

    if (!toUserAccount) {
        throw new AppError("Invalid toAccount", 400);
    }

    const fromUserAccount = await accountModel.findOne({ user: userId });
    if (!fromUserAccount) {
        throw new AppError("System account not found", 400);
    }

    return { fromUserAccount, toUserAccount };
}

async function isTransactionAlreadyExist(idempotencyKey){
    const existingTransaction = await transactionModel.findOne({
        idempotencyKey:idempotencyKey
    });

    if (!existingTransaction) return null;

    if (existingTransaction.status === "COMPLETED") {
        return {
            type: "ALREADY_COMPLETED",
            transaction: existingTransaction
        };
    }

    if (existingTransaction.status === "PENDING") {

        return {
            type: "PENDING",
        };
    }

    if (existingTransaction.status === "FAILED") {
        throw new AppError("Transaction processing failed, please retry", 500);
    }

    if (existingTransaction.status === "REVERSED") {

        throw new AppError("Transaction was reversed, please retry", 500);
    }

    return null;
}

async function checkAccountStatus(fromUserAccount, toUserAccount){
     if (fromUserAccount.status !== "ACTIVE" || toUserAccount.status !== "ACTIVE") {
       
        throw new AppError("Both fromAccount and toAccount must be ACTIVE to process transaction", 400);

    }
}

async function validateUserAccountBalance(fromUserAccount, amount){
    const _balance = await fromUserAccount.getBalance();
    
    if(_balance < amount){
        throw new AppError( `Insufficient balance. Current balance is ${_balance}. Requested amount is ${amount}`,400)
    }
}

async function executeTransactionFlow({fromAccount, toAccount, amount, idempotencyKey, session}){
    //We have done destructing here , we could have used array indexing , but just it look much dashing and less complex
    const [_transaction] = await transactionModel.create([ {
            fromAccount,
            toAccount,
            amount,
            idempotencyKey,
            status: "PENDING"
        } ], { session });
    
    await createDebitLedgerEntry({fromAccount, amount, _transaction, session});
    await createCreditLedgerEntry({toAccount, amount, _transaction, session});
        
   
    await transactionModel.findOneAndUpdate(
            { _id: _transaction._id },
            { status: "COMPLETED" },
            { session }
        )
    return _transaction;
}

async function createDebitLedgerEntry({fromAccount, amount, _transaction, session}){
      await ledgerModel.create([ {
            account: fromAccount,
            amount: amount,
            transaction: _transaction._id,
            type: "DEBIT"
        } ], { session })
}

async function createCreditLedgerEntry({toAccount, amount, _transaction, session}){
    await ledgerModel.create([ {
            account: toAccount,
            amount: amount,
            transaction: _transaction._id,
            type: "CREDIT"
        } ], { session })
}

async function sendTransactionEmail({
        _email, _name, _amount, _toAccount
    }){
        await emailService.sendTransactionEmail(_email, _name, _amount ,_toAccount);
        
}

module.exports = {createTransaction, createInitialFunding}