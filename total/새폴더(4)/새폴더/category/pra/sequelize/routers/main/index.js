const express = require('express')
const router = express.Router()


router.use('/',(req,res)=>{
    res.send('<a href=#">user</a>')
})





module.exports = router