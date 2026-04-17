const express = require('express')
const userRoute = require('../routes/user.route')
const musicRoute = require('../routes/music.route')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",userRoute)
app.use("/api/music", musicRoute)

module.exports = app