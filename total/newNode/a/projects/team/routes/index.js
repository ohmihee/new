const express = require('express')
const { route } = require('./user')
const router = express.Router()
const userRouter = require('./user/index.js')
const {User} = require('../models')
const admin = require('./admin/index.js')



router.use('/user',userRouter)
// router.get('/',async (req,res)=>{
//     let asd='zzzzzzzzzzzz'
//     try{
//         let res = await User.findOne({
//             id:1
//             // psw,            
//         })
//         console.log("idx",res.idx)
//     }catch(e){
//         console.log('error===================',e)
//     }   
//     //console.log(req)
//     res.render('index.html')
// })
router.use('/admin',admin)
router.get('/',(req,res)=>{
    //console.log(req)
    res.render('index.html')

})


module.exports = router

// 참고 https://alencion.tistory.com/48