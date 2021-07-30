const express = require('express')
const router = express.Router()
const admin = require('./admin/index.js')

router.use('/admin',admin)


module.exports = router 