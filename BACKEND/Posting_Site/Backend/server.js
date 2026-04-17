require('dotenv').config();
const app = require('./src/app')
const ConnectDB = require('./db/db')

ConnectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000")
})
console.log(typeof require);
