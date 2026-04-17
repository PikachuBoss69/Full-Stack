const mongoose = require('mongoose')

const AuthSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
       type: String
    },
    email:{
        type:String,
        unique:true
    }
})

const AuthModel = mongoose.model('Auth',AuthSchema);


module.exports = AuthModel