const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router()

router.post("/register",userController.registerUser)
router.post("/logIn",userController.loginUser)
router.post("/logOut",userController.logOutUser)

module.exports = router