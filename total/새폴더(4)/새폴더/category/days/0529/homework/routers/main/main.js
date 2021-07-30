const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//const token = require('./createtoken') //외부 js파일 가져오기
const ctoken = require('./jwt')
const auth = require('./middleware/auth')


app.set('view engine','html')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static('public'))


nunjucks.configure('views',{express:app})



const express = require('express')
const router = express.Router()

let main = router.get('/',(req,res)=>{
    let {msg} = req.query;
    res.cookie('token','algml')
    res.render('main')
})

let userInfo = router.get('/user/info',auth,(req,res))

module.exports = {
    main
}