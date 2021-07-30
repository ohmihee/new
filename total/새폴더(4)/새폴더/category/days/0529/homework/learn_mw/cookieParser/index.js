const express = require('express')
const app = express()
const port = process.env.PORT||3010
const morgan = require('morgan')
// morgan 미들웨어는 logging 즉 상태에 대한 기록을 보여주는 미들웨어
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// 쿠키 파싱을 돕는 미들웨어


app.use(express.urlencoded({extended:false}))

app.use(morgan(':method:url'))
// method와 url에 대한 정보만 보여줌
//app.use(morgan('tiny'));
// morgan()의 안에 오는 인자에 따라 보여주는 내용이 다르다.
// http://expressjs.com/en/resources/middleware/morgan.html 관련 
app.use(cookieParser())
// cookie-parser사용
// req를 통해 cookies 객체에 접근 가능

app.get('/',(req,res)=>{    
    if(req.cookies.remember){ 
        // cookie-parser를 통해 request객체의 쿠키에 접근 가능
        // 즉 해당 /에 들어왔을 때 쿠키에 remember이 있다면 아래의 내용을 실행
        //console.log('if')
        res.send('Remembered :).Click to <a href="/forget">forget</a>')        
    }else{
        // remember이 없다면
        // 아래의 내용을 실행
        //console.log('else')
        res.send('<form method="post"><p>check to<label>'
        +'<input type="checkbox" name="remember"/> remberer me</label>'
        +'<input type="submit" value="제출"/>0</p></form>')
    }    
})

app.get('./forget',function(req,res){
    res.clearCookie('remberer');
    res.redirect('back');
})

app.post('/',(req,res)=>{
    let min = 60000
    if(req.body.remember) res.cookie('remember',1,{maxAge:min})
    res.redirect('back')
})


app.listen(port,()=>{
    console.log(`server start port${port}`)
    
})
// 해당서버가 아닌 다른 port에서 저장한 쿠키가 유지되는 것이 옳은가?? 질문할 것