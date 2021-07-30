require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const app = express();
const port = process.env.SERVER_PORT2;
const bodyparser = require('body-parser');
console.log('port:',port);

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    autoescape:true,
});

app.use(bodyparser.urlencoded({extended:false}))

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'member',
});

connection.connect();

app.get('/',(req,res)=>{
    connection.query('select * from user',(error,results,)=>{
        if(error){
            console.log('errrrrrrrrror',error);
        }else{
            console.log('resssssssssssssults',results);
            results.forEach(e=>{
                console.log(e.userid,e.userpw,e.username,e.usergender);
            });
        };
    })
    res.render('index1.html',{
        username:req.query.username,
        userid:req.query.userid,
        userpw:req.query.userpw,
        usergender:req.query.usergender,
    })
})

app.post('/join1',(req,res)=>{
    console.log(req.body);
    let id = req.body.userid;
    let pw = req.body.userpw;
    let name = req.body.username;
    let gender = req.body.usergender;
    let sql = `insert into user(userid,userpw,username,usergender) values('${id}','${pw}','${name}','${gender}')`;
    console.log("sqqqqqqqqqqqqll:",sql);
    connection.query(sql,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.render('join1.html',{
                id:id,
                pw:pw,
                name:name,
                gender:gender
            })
        }
    });
})
app.listen(port,()=>{
    console.log(`server start port : ${port}`);
})