const ConnectDb = require('./database/mongoDb')
const app = require('./src/app')
require('dotenv').config()

const PORT = process.env.PORT || 3000

ConnectDb()

app.listen(PORT), ()=>{
    console.log("Server is running on Port 3000")
}