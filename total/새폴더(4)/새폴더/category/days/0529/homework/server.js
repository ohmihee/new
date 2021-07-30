const express = require('express')
const bodyParser = require('body-parser')
// 본문 해석
// body-parser참고 사이트 https://backback.tistory.com/336
const nunjucks = require('nunjucks')
const app = express()
const ctoken = require('./jwt')
require('dotenv').config('./env')
/*
 const path = require('path')
 require('dotenv').config({path:path.join(__dirname,'.env')})
// require('dotenv').config('./env')에서 오류 발생시 아래와 같은 코드 이용
*/
const port = process.env.PORT||3012
const cookieParser = require('cookie-parser')
//const router = require('./routers/index.js')
const auth = require('./middleware/auth')
const { token } = require('morgan')
const {sequelize} = require('./models')
const {User} = require('./models')
const cors = require('cors')
// cors는 현재 도메인과 다른 도메인을 요청하는 것을 가능하게 해주는 미들웨어
const session = require('express-session')
const mysql = require('mysql')




const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'midas3356',
    database:'algml'
})

connection.connect()

app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
    cookie:{
        hasonly:true,
        secure:false
    }
}))

app.use(cors())

app.set('view engine','html')

app.use(bodyParser.json())
//json형식으로 데이터를 가져오는 방식을 사용하겠다는 것
//req.body.name이나 req.body.age등 req.body. 을 통해 원하는 값을 가져올 수 있다. 
app.use(bodyParser.urlencoded({extended:false}))
//false일 경우 node.js에 기본 내장된 querystring 사용
app.use(express.static('public'))
app.use(cookieParser())

nunjucks.configure('views',{express:app})

sequelize.sync({force:false})
.then((result)=>{
    console.log('db 연결 성공')
})
.catch((err)=>{
    console.error(`db연결실패 ${err}`)
})



//app.get('/',router)
app.get('/',async (req,res)=>{
    let{msg} = req.query
    res.cookie('token','test')
    res.render('main')
})

app.get('/join',(req,res)=>{
    res.render('join')
})


app.post('/join',async(req,res)=>{
    let userid = req.body.userId
    let userpw = req.body.userPw
    let birth = req.body.userBirth
    let gender = req.body.gender
    let phoneNumber = req.body.phoneNumber
    let email = req.body.email
    let name=req.body.name
   
    connection.query(`INSERT INTO users2(userid,userpw,birth,gender,phoneNumber,email,name) values("${userid}","${userpw}","${birth}",${gender},"${phoneNumber}","${email}","${name}")`,(err,res,)=>{
        if(err){throw err}
        console.log(res)
    })
    // try{
    //     let addUser = await User.create({
    //         userid:req.body.userId,
    //         userpw:req.body.userPw,
    //         birth:req.body.userBirth,
    //         gender: req.body.gender,
    //         phoneNumber:req.body.phoneNumber,
    //         email:req.body.email,
    //         created_at:0000000,
    //         name:req.body.name
    //     })
        
    // }catch(e){
    //     console.log(e)
    // }
    
    res.render('main')
})


//======================================================================다시 확인
app.get('/user/info',auth,(req,res)=>{
    res.send(`hello ${req.userid}`)
})

app.get('/menu1',(req,res)=>{
    res.cookie('token','menu1')
    res.send('menu1 페이지입니다.')
})

app.post('/auth/local/login',(req,res)=>{
    let{userid,userpw} = req.body
    console.log('body req- userid userpw',userid,userpw)
    let result = {};
    let userid1 = connection.query(`select userid,userpw from users2 where userid="${userid}"`,(err,res)=>{
        if(err){throw err}
        let dbuserid = res[0].userid
        let dbuserpw = res[0].userpw
        console.log(dbuserid,dbuserpw)

        if(userid==dbuserid && userpw==dbuserpw){
            //로그인 성공
            result = {
                result:true,
                msg:'로그인에 성공하셨습니다.'
            }
            console.log('성공')
            let token = ctoken(userid)
            res.cookie('AccessToken',token,{httpOnly:true,secure:true,})
        }else{
            //로그인 실패
            result = {
                result:false,
                msg:'아이디와 패스워드를 확인해주세요'
            }
            console.log('실패')
        }
    })
    
    res.json(
        result
    )
    
})

app.get('/login',(req,res)=>{
    const {id,pw} = req.query;
    let userid = connection.query(`select userid,userpw from users2 where userid="${id}"`,(req,res)=>{
        if(err){throw err}
        let dbuserid = res[0].userid
        let dbuserpw = res[0].userpw
        console.log(dbuserid,dbuserpw)
    })
    if(id==dbuserid&&pw==dbuserpw){
        //토큰생성
        let token = ctoken(id)
        res.cookie('token',ctoken,{httpOnly:true,secure:true,})
        res.redirect('/?msg=로그인 성공')
    }else{
        //토큰실패
        res.redirect('/?msg=로그인 실패')
    }
})







app.listen(port,()=>{
    console.log(`server start port ${port}`)
})