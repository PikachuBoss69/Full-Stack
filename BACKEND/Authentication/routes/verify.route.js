const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router();
const userModel = require('../model/Auth.model')
require('dotenv').config()
const SECRET_KEY = process.env.JWT_SECRET_KEY

router.post('/create',async (req, res)=>{
    const token = req.cookies.token;
    
    if(!token){
        return res.status(401).json({
            message:"Token is missig"
        })
    }

    try{
        console.log("verify token : ",JSON.stringify(token))
        console.log("verify secret key :", JSON.stringify(SECRET_KEY))
        const decode = jwt.verify(token,SECRET_KEY);
        const user = await userModel.findOne({
            _id:decode.id
        })
        return res.status(200).json({
        message: "User verified",
        user
        });
    }

    catch(err){
        console.log("JWT ERROR:", err.message);
        return res.status(401).json({
            message: `TOKEN IS INVALID : ${err.message}`
        });
    }
})



module.exports = router;