const express = require('express')  
const accountController = require('../controller/account.controller')
const middleware = require('../middleware/auth.middleware')

const router = express.Router()

router.post('/createAcc',middleware.authMiddleware, accountController.createAccountController)

module.exports = router