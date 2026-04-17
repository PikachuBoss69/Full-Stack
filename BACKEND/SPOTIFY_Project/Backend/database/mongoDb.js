const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URL = process.env.MONGO_URL

async function ConnectDb(){
    try{

        await mongoose.connect(MONGO_URL, {
            dbName: "Spotify_Database"
        })
        console.log("✅ MongoDB Connected Successfully")
    }
    catch(err){
        console.log("❌ MongoDB Not Connected")
        console.error(err)
        process.exit(1)
    }
}
module.exports = ConnectDb