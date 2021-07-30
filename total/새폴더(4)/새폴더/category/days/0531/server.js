const express = require('express')
const app = express()
// 웹소켓 사용을 위한 패키지
// npm install socket.io
const socket = require('socket.io')
// socket.io는 읽기 위해서는 http라는 내장모듈을 설치하여 연결해야함
// npm http는 socket.io사용시 연결하여 http문서를 읽기 위해서
const http = require('http')
const server = http.createServer(app)
// http와 서버를 연결한 상태
const io = socket(server)
// socket과 서버를 연결한 상태
const nunjucks = require('nunjucks')

app.set('view engine','html')

nunjucks.configure('views',{express:app})


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log('server start port')
})