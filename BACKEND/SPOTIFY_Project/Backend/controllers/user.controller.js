const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config()
const SECRET_KEY = process.env.JWT_SECRET_KEY

async function registerUser(req, res){
    try{

        
        const {username, email, password, role = 'user'} = req.body;
        
        const ifUserAlreadyExist =await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })
    
    if(ifUserAlreadyExist){
        return res.status(409).json({
            message:"User Already Exist"
        })
    }
    const hash = await bcrypt.hash(password,10);
    
    const user =await userModel.create({
        username,
        email,
        password : hash,
        role
    })
    
    const token = jwt.sign({
        id : user._id,
        role: user.role
    },SECRET_KEY)

    res.cookie("token",token);
    
    
    res.status(201).json({
        messgae:"User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })
    }
    catch(err){
        console.log("Error : ",err);
        res.status(401).json({
            message:"Error occoured" ,
            error: err.message
        })
    }
}

async function loginUser(req, res){
    try{

    
    const {username, email, password, role} = req.body
    
    const validUser = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(!validUser){
        res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const validPassword = await bcrypt.compare(password, validUser.password);
    if(!validPassword){
        res.status(401).json({
            message:"Invalid Password"
        })
    }

    const token = jwt.sign({
        id:validUser._id,
        role:validUser.role
    },SECRET_KEY);

    res.cookie("token",token);

    res.status(200).json({
        message:"User LogIn Successfully",
        user:{
            id:validUser._id,
            username:validUser.username,
            email:validUser.email,
            role:validUser.role
        }
    })
     }
    catch(err){
        console.log("Error : ",err);
        res.status(401).json({
            message:"Error occoured" ,
            error: err.message
        })
    }
}

async function logOutUser(req, res){
    try{

    
    res.clearCookie("token");

    res.status(200).json({
        messgae:"User LogOut Successfully"
    })
     }
    catch(err){
        console.log("Error : ",err);
        res.status(401).json({
            message:"Error occoured" ,
            error: err.message
        })
    }
}
module.exports = {registerUser, loginUser, logOutUser}