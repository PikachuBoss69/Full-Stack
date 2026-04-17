const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const authRoutes = require('../routes/auth.route')
const verifyRoutes = require('../routes/verify.route')

app.use(express.json())
app.use('/api/auth',authRoutes);
app.use('/api/post',verifyRoutes);

module.exports = app;
