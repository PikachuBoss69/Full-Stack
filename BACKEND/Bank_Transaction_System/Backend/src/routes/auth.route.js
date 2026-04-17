const express = require('express')  
const authController = require('../controller/auth.controller')
const middleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/register',MauthController.registerUserController)
router.post('/login',middleware.authMiddleware, authController.logInUserController)
router.post('/logout',middleware.authMiddleware, authController.logOutUserController)

module.exports = router