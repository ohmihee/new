const express = require('express')
const router = express.Router()
const colInfo = require('./colinfo.js')

//admin
router.get('/',(req,res)=>{
    res.render('admin/admin.html')
})
// admin/col
router.get('/col',colInfo.getCol)
router.post('/col',colInfo.postCol)
router.use('/col/greet',colInfo.greet)
router.use('/col/history',colInfo.history)
router.use('/col/route',colInfo.route)
router.use('/col/teacher',colInfo.teacher)
router.use('/col/facility',colInfo.facility)

//admin/course
router.use('/course/',(req,res)=>{
    res.render('./admin/course/course.html')
})

module.exports = router