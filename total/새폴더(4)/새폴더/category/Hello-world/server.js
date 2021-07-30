require('dotenv').config();
const express = require('express');
const nunjucks = require('nunjucks');
const mysql = require('mysql');
const app = express();
const port = process.env.SERVER_PORT;
const errorcontrollers = require('./controllers/errorcontrollers');
const bodyparser = require('body-parser');


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    autoescape:true,
   
});

app.use(bodyparser.urlencoded({extended:false}))


// app.use(errorcontrollers.pageNotFoundError);
// app.use(errorcontrollers.respondInternalError);

let connection = mysql.createConnection({              //데이터적인 부분을 넘겨받기만 한 상태 넘겨받아서 connection에 할당한 상태
    host:'localhost',
    user:'root',
    password:'root',
    database:'algml',
});

connection.connect();           // 데이터베이스를 연결하는 문법

console.log('error');
console.log( "check");

app.get('/',(req,res)=>{
    // res.send('hello world');
    // 쿼리문 => sql select update delete 

    connection.query('select * from user',(error,results,)=>{
        if(error){
            // error발생시 실행
            console.log(error);
        }else{
            // error가 없으면 실행
            console.log("resulttttttttttttttt:",results);
            results.forEach(e => {
                console.log(e.userid,e.userpw,e.username);
            });
        };
    })        
    res.render('index2.html',{  
        username:req.query.username,
        userid:req.query.userid,
        userpw:req.query.userpw,  
    })
    
})


app.post('/join',(req,res)=>{
    console.log(req.body);

    let id = req.body.userid;
    let pw = req.body.userpw;
    let name = req.body.username;
    // req.body 내용 가져오기
    // query문 작성(sql문 insert into user)
    // 실제 쿼리문 작성
    // join.html 실행
    let sql = `insert into user(userid,userpw,username) values('${id}','${pw}','${name}')`;
    console.log("sqllllllllllll:",sql);
    connection.query(sql,(error,results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);
            res.render('join.html',{
                id:id,
                pw:pw,
                name:name
            })
        }
    });
   
})
app.listen(port,()=>{
    console.log(`server start port : ${port}`);
})

// 가능하면 오류는 본인 힘으로 해결 해야함
// 치는 속도 빨라져야 함vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
/* 
목표 : 회원가입 만들기
0421 목표 : html post -> server에서 받아서 -> db에 insert 넣가
*/
