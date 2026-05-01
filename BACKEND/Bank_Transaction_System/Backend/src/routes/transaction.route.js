const {Router} = require('express') 
const authMiddleware = require('../middleware/auth.middleware'); 
const transactionController = require('../controller/transaction.controller')


const router = Router()


/**
 * - POST /api/transactions/
 * - Create a new transaction
 */

router.post('/', authMiddleware.authMiddleware, transactionController.createTransaction)

/**
 * - POST /api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */


router.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFunding)

module.exports = router