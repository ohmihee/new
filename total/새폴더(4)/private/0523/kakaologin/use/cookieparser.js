const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
//
//const port = process.env_PORT||3000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(cookieParser());
// cookie parser이용을 위한 기본 세팅

app.get('/',(req,res)=>{
    res.cookie('key','value',{
        maxAge:10000
    })
  
    console.log(req.cookies.key);
})



app.listen(3000,()=>{
    console.log('server start port 3000');
})