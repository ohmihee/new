const express = require('express')
const cookieSession = require('cookie-session')
const app = express()

app.use(cookieSession({
    name:'session',
    keys:123456,
    maxAge:24*60*60*1000
    // 24hour동안 유지됨
}))