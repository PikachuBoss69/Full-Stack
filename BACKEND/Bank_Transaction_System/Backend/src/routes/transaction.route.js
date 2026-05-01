const express = require('express')  
const transactionController = require('../controller/transaction.controller')


const router = express.Router()

router.post('/createTransaction',transactionController.createTransaction)

module.exports = router