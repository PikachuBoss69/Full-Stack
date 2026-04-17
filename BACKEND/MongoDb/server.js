const app = require('./src/app')
const ConnectDb = require('./db/db')

ConnectDb();

app.listen(3000,()=>{
    console.log("server is running in port 3000")
})