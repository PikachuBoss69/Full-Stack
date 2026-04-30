const transactionModel = require("../models/transaction.model")
const ledgerModel = require("../models/ledger.model")
const accountModel = require("../models/account.model")
const emailService = require("../services/email.service")
const mongoose = require("mongoose")
const AppError = require("../utils/AppError");

async function createTransaction(req, res){
    try{

        
        const { fromAccount, toAccount, amount, idempotencyKey} = req.body;
        
        const { fromUserAccount, toUserAccount} = await validateRequest(fromAccount, toAccount, amount, idempotencyKey);

            const transaction = await isTransactionAlreadyExist(idempotencyKey);

        //Used optional cahining here , for my own reminder as im forgetful about small things
        if (transaction?.type === "ALREADY_COMPLETED") {
            return res.status(200).json({
                message: "Transaction already processed",
                transaction: result.transaction
            });
        }
        await checkAccountStatus(fromUserAccount, toUserAccount);
    }catch(err){
        res.status(err.status || 400).json({
             message: err.message
        });
    }
    

}

async function validateRequest(fromAccount, toAccount, amount, idempotencyKey){
    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
       throw new Error("Missing required parameters");
    }

    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount
    })

    const toUserAccount = await accountModel.findOne({
        _id: toAccount
    })

    if(!fromUserAccount || !toUserAccount){
        throw new Error("Invalid fromAccount or toAccount");
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
            
        throw new AppError("Transaction is still processing", 200);
  
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
       
        throw new Error("Both fromAccount and toAccount must be ACTIVE to process transaction");

    }
}