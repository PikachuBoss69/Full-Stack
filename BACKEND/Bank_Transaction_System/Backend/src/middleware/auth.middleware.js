const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
require('dotevn').config()

const jwt_secret_key = process.env.JWT_SECRET_KEY

async function authMiddleware(req, res, next) {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ]

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing"
        })
    }

    

    try {

        const decoded = jwt.verify(token, jwt_secret_key)

        const user = await userModel.findById(decoded.userId)

        req.user = user

        return next()

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        })
    }
}

module.exports = {authMiddleware}