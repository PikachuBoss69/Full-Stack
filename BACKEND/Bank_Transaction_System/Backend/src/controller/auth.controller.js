const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const tokenBlackListModel = require('../models/blackList.model')
const emailService = require('../services/nodemailer.service')
require('dotenv').config()

const secretKey = process.env.JWT_SECRET_KEY


async function registerUserController(req, res){
    const {name, email, password} = req.body;

    const isExist =await userModel.findOne({
        email
    })
    if(isExist){
        return res.status(422).json({
            message:"User already Exist",
            status:"Failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "3d" })

    res.cookie("token", token)

    res.status(201).json({
        message:"User Created Successfully",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
    await emailService.sendRegistrationEmail(user.email, user.name)
}

async function logInUserController(req, res){
    const {email, password} = req.body

    const user =await userModel.findOne({
        email
    }).select("+password")
    if(!user){
        return res.status(401).json({
            message:"Invalid Email ",
            status:"Failed"
        })
    }
    const isValidPassword = await user.comparePassword(password)

    if (!isValidPassword) {
        return res.status(401).json({
            message: "INVALID Password",
            status:"Failed"
        })
    }
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "3d" })

    res.cookie("token", token)

    res.status(200).json({
        message:"User LogIn Successfully",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
}

async function logOutUserController(req, res){
     const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ]

    if (!token) {
        return res.status(200).json({
            message: "User logged out successfully"
        })
    }

    await tokenBlackListModel.create({
        token: token
    })

    res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}

module.exports = {
    registerUserController,
    logInUserController,
    logOutUserController
}