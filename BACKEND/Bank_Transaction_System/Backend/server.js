const app = require('./src/app')
const ConnectDb = require('./src/database/mongoDb')
require('dotenv').config()

const port = process.env.PORT || 3000
ConnectDb()

app.listen(port,()=>{
    console.log(`Serveris running on port ${port}`);
})