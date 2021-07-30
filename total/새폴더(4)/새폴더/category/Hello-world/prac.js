require('dotenv').config();
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const port = process.env.SERVER_PORT;
const bodyparser = require('body-parser')

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    autoescapre:true,
});

app.use(bodyparser.urlencoded({extended:false}))

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    batabase:'member',
})

connection.connect();

app.get('/',(req,res)=>{
    connection.query('select * from user',(error,results)=>{
        if(error){
            console.log('errrrrror',error);
        }else{
            console.log('ressssssults',results);
            results.forEach(e=>{
                console.log(e.userid,e.userpw,e.usergender);
            });
        };
    })
    res.render('index.html',{
        username:req.query.username,
        userid:req.query.userid,
        userpw:req.query,userpw,
        usergender:req.query.usergender,
    })
})

app.post('/join1',(req,res)=>{
    console.log(results);
    res.render('join1.html')
   
})

app.listen(port,()=>{
    console.log(`server start port :${port}`);
})