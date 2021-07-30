/* 가장 먼저 npm init
-> 가장 먼저 npm init
-> 필요한 npm 설치
-> npm 가져와서 할당 express = require('express')
-> app = express();      //express가 기니가 app으로 할당
-> app.listen(포트번호,익명함수)  익명함수 부분에 포트가 실행되면 나올 것 작성   app.listen(3000,()=>{console.log('server')})
-> app.get('/',(req,res)=>{res.send('hello world)});
*/
const express = require('express');
console.log("eeeeeeeeeeeeeeeeeeee");
const app = express();
console.log(app.init);
app.get('/',(req,res)=>{
    res.send('hello worldddddddd');
})

app.listen(3000,()=>{
    console.log('server start port:3000');
})










// const expree = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello world');
// })
// app.listen(3000,()=>{
//     console.log('server');
// })