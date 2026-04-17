require('dotenv').config();
const mongoose = require('mongoose')

async function ConnectDB(){
    try{

        await mongoose.connect(process.env.MONGO_URI)
        
        console.log("✅ MongoDB Connected Successfully")
    }
    catch(err){
        console.log("❌ DB Connection Error:")
        console.error(err)
        process.exit(1);
    }
}

module.exports = ConnectDB;