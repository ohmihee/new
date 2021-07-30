// cookie-parser 사용법
const express = require('express')
const app = express()
require('dotenv').config('.../env')
// env파일이 존재하는 위치보다 더 깊은 경로에서 env파일 이용하려할때 경로 어떻게 해야하는지 물어보기
const port = process.env.PORT||3012
const cookieParser = require('cookie-parser')
const router = express.Router()


app.use(cookieParser())

app.use('/',router)

router.route("/createCookie").get(function(req,res){
    // lcoalhost:3012/createCookie로 들어갔을때 쿠키가 생성됨
    const user = {"name":"algml", "like":"sleep"}
    res.cookie("user",user)
    // user라는 이름의 쿠키를 생성하고 값으로 위에서 선언된 user를 값으로 준다.
    console.log('cookie yeah!!')
    res.redirect('showcookies')
    // 쿠키가 생성된 후 주소를 localhost:3012/showcookies로 바꾸어줌
})



app.listen(port,()=>{
    console.log(`server start ${port}`)
})

// 주소창에 http://localhost:3012/showcookies 를 입력하고
// Application에서 cookies의 하위항목에서 해당 url을 선택하면 user라는 이름의 쿠키가 생성된 것을 볼 수 있다.