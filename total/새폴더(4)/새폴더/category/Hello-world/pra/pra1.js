/*
nunjucks사용 이우
-> html에서 post나 get으로 보내는 건 가능
-> 반대로 서버에서 html로 보내는 방법은 템플릿 엔진 등을 사용하지 않고는 불가능
-> 즉 nunjucks를 통해 서버에서 변수를 html에 보내는 것이 가능해짐
ex) nunjucks.configure('views',(
    title:algml,
    사용시에는 html에서 {{title}}   //이렇게 하면 algml를 가져올 수 있다.
))
nunjucks 세팅
-> nunjucks
-> npm install nunjucks
-> repuire
-> app.set('view engine','html')              //express내용을 view엔진으로 바꾸어주는 
-> nunjucks.configure('views',{             //첫번째 인자값은 폴더명
    express:app,
})

nunjucks 사용시에는
-> res.render('index.html')                     //파일 해석을 위해 send가 아닌 render 사용
-> 먼제 index.html 파일 생성해두기

*/

/*
post와 get의 차이
-> get은 url에 data가 표현되어진다.
-> post는 url에 data가 감춰지게 된다.
-> data를 받을 때
post =>  req.body.name
get  =>  req.query.name
*/

/*
post 

*/
const nunjucks = require('nunjucks');
const express = require('express');
console.log("eeeeeeeeeeeeeeeeeeee");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
console.log(app.init);

let connection = mysql.createConnection({               //인자값으로 객체가 들어간다.
    // host localhost
    // user : root   ~ root는 최상위의 개체를 의미
    // password : 본인이 정한 비밀번호
    // 
    host:'localhost',
    user:'root',
    password:'midas3356',
    database:'member',
});

connection.connect();        // 위에는 connection에 mysql data를 받기만 한 것 
                            // 연결하기 위해서는 connect();를 이용

app.use(bodyParser.urlencoded({extended:false}));           // body의 내용을 가져오게끔 세팅하는 rjt
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    title:"algml",
})

app.get('/',(req,res)=>{
    res.render('index1.html',{
        title:'algmlt',                 //render는 인자값이 2개 하나는 파일, 두번째는 객체
        name:'"algml'});                //객체를 여러개 보내는 것 가능 
})

app.post('/join',(req,res)=>{
    res.render('join.html',{
        name:req.body.name,                 // express에서는 body내용이 가져와지지 않아서
                                           // body내용을 가져올 수 있게끔 body-parser을 설치
        
    })
})

// '/' == http://localhost:3000
// '/join == 'http://localhost:3000/join'

// html-> server.js -> join.html로 값이 넘어가는

app.get('/join',(req,res)=>{           //  /join은 html파일에서 form을 만들 때 acttion=""의 값으로 넣은 것
                                       //  즉 form의 action값을 통해 server.js로 data를 보내고 res.render를 통해 전해받은 data를 join.html파일에 전달하는 것 
                                      
    connection.query(`insert into phone(name) values('${req.query.name}')`,(error,result)=>{           // 기본 구조 connection.query('sql문',()=>)
        if(error){                                                                             // insert into handphone(name) values('samsang');  
            console.log('error');
        }else{
            console.log('성공');
            console.log(req.query.name);
            
        }
    })           
                                        
    // post는 내용을 body로 받고
    // get은 내용을 url로 받는다.
    res.render('join.html',{   
        name:req.query.name,
    });                          
})
// index.html 파일에서 {{title}} {{name}} 을 통해 algmlt와 algml를 출력

app.listen(3000,()=>{
    console.log('server start port:3000');
})







