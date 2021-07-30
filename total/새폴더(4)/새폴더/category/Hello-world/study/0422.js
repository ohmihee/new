// fs http os 는 nodejs가 기본적으로 제공
// module 즉 프로젝트의 부품으로 인식하면 쉽다
// npm을 통해 module을 담아 사용 가능
// router : 사용자의 요청을 어떤 controller에 연결해줄지 정하는 중개자 역할

//일종의 정해진 약속으로 express를 사용할때는 require로 받아와서 변수에 아래와 같은 방식으로 할당해야함
const express = require('express');
const app = express();
// jade의 코드를 더욱 가독성 좋게 하는
app.locals.pretty=true;
// jade사용을 위한 세팅
app.set('view engine','jade');
app.set('views','./viewss')
// 정적인 파일이 위치할 디렉토리를 지정하는 기능을 한다. 우선은 그냥 외우기
// res.render는 소스 코드를 가져와서 웹페이지를 출력해내는 것
app.use(express.static('public'));
app.get('/template',function(req,res){
    // jade에서 변수 사용하는 방법 인자값으로 준다.
    res.render('temp',{time:'hello'});
})
app.get('/router',function (req,res){
    res.send("router");
})
/*
-> 사용자가 홈페이지에 접속했을 때 홈페이지를 보여주기 위함 : get과 post방식 존재
-> '/'맨처음 홈
-> '/'을 통해 맨 처음 페이지에 들어오면 두번째 인자값인 콜백함수를 실행  
-> 콜백함수의 첫번재 인자로는 request 두번재 인자로는 response
-> req는 사용자가 요청한 정보와 관련한 객체를 전달 
-> res는 사용자가 요청한 정보에 대해 응답할 수 있는 객체를 전달하도록 한 약속
-> res에는 send라는 메소드가 존재하여 res.send()를 통해 hello world를 화면에 출력
*/ 
// 이러한 get과 같은 메소드를 라우터(router)라고 한다. 즉 경로를 찾는다.
// routing : 사용자 -> get('/') -> res.send('first_send');
//           사용자 -> get('/login') -> res.send('logfin_send');
app.get('/', function (req,res){
    res.send('hello world');
})
// 이렇게 하면 자바스크립트를 사용해서 더욱 쉽게 html을 작성 가능
// html안에 변수 사용시에는 `일반적으로 사용 ${여기서변수명}`
// 시간도 자바스크립트를 사용하여 간단하게 표시가능
app.get('/dynamic',function(req,res){
    let time = Date();
    let lis= '';
    for(i=0; i<5 ;i++){
        lis = lis+'<li>coding</li>';
    }
    let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- localhost:3000/static.html 을 입력하면 아래의 내용이 나온다. -->
        동적인 hello dynamic!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output);
})
// 처음 페이지 localhost:3000에서 localhost:3000/login의 특정 경로로 가면 login_page를 화면에 출력
app.get('/login',function (req,res){
    res.send('login_page');
})
//.listen을 통해 3000번 port를 이용가능하게 함
// 3000번 port로 들어오면 두 번째 인자값으로 준 콜백함수 실행
// 즉 localhost:3000으로 들어가면 connected 3000 port를 출력
app.listen(3000, function(){
    console.log('connected 3000 port');
})




/*
jade는 템플릿의 일종
jade에서 이용하는 html에서 자바스크립트에서 사용하는 for문 등을 사용하려면 그 앞에-를 붙임
*/
/*
명령어
supervisor 0422.js 는 파일을 나왔다 실행했다 할 필요없이 바로 적용가능하게함
*/
