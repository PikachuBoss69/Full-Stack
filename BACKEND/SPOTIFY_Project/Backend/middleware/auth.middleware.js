const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET_KEY = process.env.JWT_SECRET_KEY


async function authArtist(req, res, next){
    const token = req.cookies.token;

    if(!token){
        res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token,SECRET_KEY)
        if(decoded.role !== "artist"){
            return res.status(403).json({
            message:"YOU DON'T HAVE ACCESS"
        })
        }
        req.user = decoded
        next()
    }
    catch(err){
         res.status(401).json({
            message:"Unauthorized"
        })
    }
}
async function authUsers(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token,SECRET_KEY)
        if(decoded.role !== "artist" && decoded.role !=="user"){
            return res.status(403).json({
            message:"YOU DON'T HAVE ACCESS"
        })
        }
        req.user = decoded
        next()
    }
    catch(err){
         res.status(401).json({
            message:"Unauthorized"
        })
    }
}
module.exports = {authArtist, authUsers}