const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    toAccount : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : "account",
        required :[true,"Receiver's Account is required"],
        index :true
    },
    fromAccount : {
        type :  mongoose.Schema.Types.ObjectId,
        ref : "account",
        required :[true,"Sender's Account is required"],
        index :true
    },
    status : {
        type : String,
        enum : {

            values : ["COMPLETED" ,"PENDING" ,"FAILED" ,"REVERSED"],
            message: "Status can be either PENDING, COMPLETED, FAILED or REVERSED",
            
            },
        default: "PENDING"
    },
    amount : {
        type : Number,
        required : [true ,"Amount is required for creating a transaction"],
        min : [0 ,"Transaction amount cannot be negative"]
    }
})

const transactionModel = mongoose.model("transaction", transactionSchema)

module.exports = transactionModel