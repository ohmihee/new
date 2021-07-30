const express  = require('express');
const app = express();
const main = require('./routes/index');
const board = require('./routes/board');
const postPage = require('./routes/postpage');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');


app.set('views','views');
app.set('views','views/board')
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})
//nunjucks
//db
//bodyparser
// 잘 되는 지 확인
app.get('/',(req,res)=>{
    res.render('index.html');
})
app.use(bodyParser.urlencoded({extended:false}));  // post값


app.use('/post_page',postPage);
app.use('/main',main);
app.use('/board',board);

/*
router로 다른 js파일 가져오는 법
index.js파일에 작성된 내용
=>
const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hellowee');
});

module.exports = router;   // 이부분이 있어야 pra.js에 index.js파일을 보낼 수 있다.
*/

/*
const router = express.Router();   //  ==> APP
router.get('/',(req,res)=>{
    res.send('hello');
})

moudule.exports = router;     ==    app.listen(3000,()=>{
                                        console.log('server start port 3000')
                                    })

*/
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended:false}));  // post값
// 미들웨어의 하나
/*
app.use(express.static(''public'))
app.use()
-> 첫번째 인자값 function
npm 
*/
function test(req,res,next){
    console.log('hello');
    next();
    //next는 자신과 같은 것이 존재하면 그것도 실행해달라
}
app.use((req,res)=>{
    res.status(404).send('너 페이지 없음');
    //res.status(404).render('error.html');
})

app.use(test);
/*
app.use((req.res.next)=>{
    res.status(404)
    //200이랑 404만 기억
    //200사이트가 잘 작동
    //404사이트가 오류
})
//들어오는 경로를 안 쓰면 '/'이것과 같은 것 즉 기본인 상태
*/
app.use('/board',(req,res,next)=>{
    console.log('첫 실행');
    next();
})
// app.use과 app.use의 차이점
// app.use는 모든 uri를 의미 즉 next를 입력하면 그 뒤에 같은 경로를 가진 app.use나 app.get도 실행해줌
// app.use 사용하는 이유 

app.get('/',(req,res)=>{
    res.send('실행 2');
    console.log('실행2')
})

app.get(['/board','/pra'],(req,res)=>{
    console.log('실행2-2');
    res.send('게시판');
    if(req.url=='/pra'){
        console.log('req.url이 작동 되었다.')
    }else{
    console.log('reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeq',req.url);
    }
})

app.post('/write',(req,res)=>{
    console.log('error')
    res.send('불가능');
})

/*
// app.get 서버가 클라이언트의 요청을 받는 것 : 그 받는 중간이 미들웨어
즉 app.get으로 받기 전이 미들웨어 router
!) 미들웨어/router에 대해 알아보기
미들웨어
-) 개념
    -> 공통 서비스 및 기능을  애플리케이션에 제공하는 소프트웨어
    -> 데이터 관리, 애플리케이션 서비스, 메시징, 인증 및 API 관리는 주로 미들웨어를 통해 처리
*/ 
app.listen(3000,()=>{
    console.log('server start port 3000');
})