// for문 if문 
// {% for [변수] in [배열]}
//     {{[변수],[요소]}}
//     {% forend %}
    //db nunjucks

    const express = require('express');
    const app = express();
    const nunjucks = require('nunjucks');
    const bodyparser = require('body-parser');
    const mysql = require('mysql');
const e = require('express');
    
    app.use(express.static('public'));
    // 익스프레스야 나 정적파일들을 (public)안에 있는 내용으로 만들꺼야
    app.use(bodyparser.urlencoded({extended:false}))


    app.set('view engine','html');
    nunjucks.configure('view1',{
        express:app,
    })
    
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'homepage',
    });

    connection.connect();
    // database와 연결해주는 것
    // connection에 data내용이 담겨있다.

    
    app.get('/',(req,res)=>{
        res.render('index.html');
        console.log('con')
    })

    app.get('/list',(req,res)=>{
        //1. 데이터베이스 -> homepage -> board 테이블을 select문을 활용하여 내용을 console.log로 찍기
        //2. 콘솔로그를 찍은 내용을 list.html데이터를 넘기기 ~넌잡스를 통해
        //3. 넌잡스 구문 배워오기
        connection.query('select idx,subject,board_name,content,hit,date_format(today,"%Y-%m-%d") as today from board',(error,results)=>{
            // query문을 통해서 database의 포맷을 변화시켜 화면에 출력함
            if(error){                      //results는
                console.log('error');
            }else{
                  //results는 배열의 형태로 담겨져있는 상태
                res.render('list.html',{
                    list:results,
                })
            }
        })
      
    })
    
    app.get('/write',(req,res)=>{
        res.render('board_write.html')
    })

    app.post('/write',(req,res)=>{
        console.log(req.body);        //post로 받아온 경우 body-parser가져와야함
        /* DB내용 처리한 후에 list.html로 넘어가면 됨*/
        let subject = req.body.board_subject;
        let name = req.body.board_name;
        let content = req.body.board_content;
        console.log(subject,name,content);   
        let sql = `insert into board(subject,board_name,content) values('${subject}','${name}','${content}')`;
        connection.query(sql,(error,results)=>{
            if(error){
                console.log('error');
            }else{
                console.log(results);
                res.redirect(`/view?id=${results.insertId}`);
                
               
            }
        });
       
        
        
        // redirect는 url의 값을 바꾸어 주는 역할 
        // 즉 url의 값을 localhost:3000/list로 바꾸어 주어 list.html페이지로 이동함.

        // URL 구조
        // GET url표현 POST url표현x 
        // http://[도메인]/view
        // localhost:3000
        // www.naver.com
        // www.google.com
        // ?를 기준으로 앞까지는 도메인 뒤부터 querystring(get의 영역)


        //URL구조
        // URI
        //GET url표현 POST url표현x body부분에있다.
        // http://[도메인]/view?name=ingoo
        // localhost:3000
        // www.naver.com
        // www.google.com
    })

  

    app.get('/modify',(req,res)=>{
        res.render('board_modify.html');
    })
    
    app.post('/modify',(req,res)=>{
        console.log(req.body);
        // DB내용 
        res.redirect('/list');
    })

    app.get('/view',(req,res)=>{
        connection.query(`select * from board where idx=${req.query.id}`,(error,result)=>{
            if(error){
                console.log('error');
            }else{
                console.log(req.query.id);
                res.render('board_view.html',{
                    subject:result[0].subject,
                    name:result[0].board_name,
                    content:result[0].content
                })
            }
        })
                
               //내가지금 틀린게 왜틀린지 모른다
               //ex) 안되요
               //ex ) 이부분이 이해가안되요
               // 조목조목 하나의 결과치를 모르기때문임.
               //aa
    
    })

    app.listen(3000,()=>{
        console.log('aa');
    })
    