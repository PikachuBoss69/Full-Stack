const mongoose = require('mongoose')
require('dotenv').config()

const mongoUrl = process.env.MONGO_URL

//Just Tried .then and .catch ,here instead of my ususal async and try error handling for a change

function ConnectDb(){
   
    mongoose.connect(mongoUrl, {
        dbName: "Bank_Database"
    })
    .then(()=>{
        console.log("✅ MongoDB Connected Successfully")
    })    
    .catch((err)=>{
        console.log("❌ MongoDB Not Connected")
        console.error(err)
        process.exit(1)
    })
}
module.exports = ConnectDb