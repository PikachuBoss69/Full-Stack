const app = require('./src/app')
const ConnectDb = require('./database/mongoDb')
require('dotenv').config()

ConnectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)
})
