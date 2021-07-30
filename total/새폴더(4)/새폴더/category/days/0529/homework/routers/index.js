const mainRouter = require('./main/index.js')
const express = require('express')
const router = express.Router()


router.use('/',mainRouter)

module.exports = router