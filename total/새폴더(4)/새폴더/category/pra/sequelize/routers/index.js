const express = require('express')
const router = express.Router()
const mainRouter = require('./main/index.js')
//const userRouter = require('./user/index')
//const boardRouter = require('./board/index')

/
router.use('/',mainRouter)
//router.use('/user',userRouter)
//router.use('/board',boardRouter)


module.exports = router