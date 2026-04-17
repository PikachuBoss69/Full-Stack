const userModel = require('../model/Auth.model')
const jwt = require('jsonwebtoken')

require('dotenv').config()
const SECRET_KEY = process.env.JWT_SECRET_KEY

async function registerUser(req, res){
    const {username, password,  email} = req.body;

    const ifUserAlreadyExist =await userModel.findOne({
        email
    })
    
    if(ifUserAlreadyExist){
        return res.status(409).json({
            message:"User Already Exist"
        })
    }
    
    const user =await userModel.create({
        username,
        password,
        email
    })

    const token = jwt.sign({
        id : user._id
    },SECRET_KEY)

    res.cookie("token",token);
    console.log("register token: ",JSON.stringify(token))
    console.log("register secret key :", JSON.stringify(SECRET_KEY))

    res.status(201).json({
        messgae:"User registered successfully",
        user
    })
}

module.exports = {registerUser}