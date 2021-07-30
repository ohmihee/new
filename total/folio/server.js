const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
/*
 nunjucks 사용이유
 nunjucks사용 이우
-> html에서 post나 get으로 보내는 건 가능
-> 반대로 서버에서 html로 보내는 방법은 템플릿 엔진 등을 사용하지 않고는 불가능
-> 즉 nunjucks를 통해 서버에서 변수를 html에 보내는 것이 가능해짐
 */
const mysql = require('mysql');
const bodyParser = require('body-parser');
const board = require('./routes/board.js'); 

app.use(express.static('public'));
// express.static는 express가 제공하는 미들웨어
// 미들웨어는 client와 server가 연결되는 중간 과정을 의미
// app이 정적파일을 사용할 때 public폴더를 이용하겠다는 것.
app.set('view engine','html')
// 화면에 나타나는 것은 html로 하겠다는 것

nunjucks.configure('views',{
    express:app,
    watch:true,
})
// views라는 이름의 폴더를 파일들이 저장되는 공간으로 사용하겠다는 것

app.use(bodyParser.urlencoded({extended:false}));
// 아직 정확히 어떤 역할을 하는 것인지 모름
// 더 알아봐야겠다.
// 우선은 그냥 암기로 하여 사용

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'midas3356',
    database:'homepage'
})
// mysql에 존재하는 createConnection메서드를 통해 
// 자신의 database정보를 객체로 전달하는 것.

connection.connect();
// 실직적으로 database에 연결하는 것

app.get('/',(req,res)=>{
    res.render('main.html');
})

app.use('/board',board);

// app.get('/',(req,res)=>{
//     res.render('write.html');
// })
//기본 창인 localhost:3000으로 들어가면 main.html 파일을 불러옴
/*
-> app을 가져오는 방식은 get과 post가 존재
-> req : request 즉 client의 요청
-> res : response는 client의 요청에 의한 server의 응답
-> res.render('파일명');   해당 파일을 불러온다.
-> res.send('안녕하세요'); 해당 브라우저에 '안녕하세요' 글자를 보내 출력
-> res.redirect('url주소'); 해당 url에 해당하는 경로로 이동시킨다.
*/




app.listen(3000,()=>{
    console.log('success');
})
// localhost:3000으로 연결되면 console.log()로 success를 출력한다는 것
