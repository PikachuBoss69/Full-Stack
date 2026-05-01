const express = require('express')  
const authController = require('../controller/auth.controller')
const middleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/register',authController.registerUserController)
router.post('/login', authController.logInUserController)
router.post('/logout',middleware.authMiddleware, authController.logOutUserController)

module.exports = router