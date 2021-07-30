const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const e = require('express');

app.use(express.static('public'));

app.set('veiw engine', 'html');

nunjucks.configure('views',{
    express:app,
    watch:true,
})

app.use(bodyParser.urlencoded({extended:false}));

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'midas3356',
    database:'homepage',
});

connection.connect(); 

app.get('/',(req,res)=>{
    res.render('boardm.html');
})

app.get('/main',(req,res)=>{
    res.render('boardm.html')
})

app.get('/list',(req,res)=>{
    connection.query('select idx,subject,writer,date_format(today, "%Y-%m-%d")as today from board',(error,result)=>{
        if(error){
            console.log('list_error');
        }else{
            res.render('list.html',{
                list:result,
            })
        }
    })
})

app.get('/view',(req,res)=>{
    console.log("query",req.query);
    connection.query(`select * from board where idx=${req.query.idx}`,(error,result)=>{
        if(error){
            console.log('error');
        }else{
            console.log('suc',result[0].idx);
            res.render('board_view.html',{
                subject:result[0].subject,
                writer:result[0].writer,
                content:result[0].content
            });

        }
    })
    
})

// app.get('/list',(req,res)=>{
//     console.log("ird ddasf",req.query.id);
//     connection.query(`select * from board where idx=${req.query.id}`,(error,result)=>{
//         if(error){
//             console.log('list_error',error);
//         }else{
//             console.log("result",result);
//             res.render('list.html',{
//                 subject:result[0].subject,
//                 name:result[0].writer,
//             });    
//             console.log('go_list');
//         }
//     })
// })

app.get('/write',(req,res)=>{
    res.render('write.html');
})

app.post('/write',(req,res)=>{
    // console.log(req.body);
    let subject =req.body.board_subject;
    let name = req.body.board_name;
    let content = req.body.board_content;
    let sql = `insert into board(subject,writer,content) values('${subject}','${name}','${content}')`;
    connection.query(sql,(error,result)=>{
        if(error){
            console.log('write_error');
        }else{
            res.render('write_complete.html')
        }
    })   
})



app.get('/modify',(req,res)=>{
    connection.query(`select * from board order by idx desc limit 1`,(error,result)=>{
        if(error){
            console.log('modify_error');
        }else{
            console.log(result[0]);
            console.log('modify yes');
            res.render('modify.html',{
                data:result[0],                
            })
            
        }
    })
})

app.get('/delete',(req,res)=>{
    res.render('delete.html');
})

app.get('/dec',(req,res)=>{
    console.log(req.query.idx);
     connection.query(`select subject from board where idx=${req.query.idx}`,(error,result)=>{
         if(error){
             console.log('dec_error');
         }else{
            res.send(`${result[0].subject}의 신고가 접수되었습니다.`); 
           
         }
     })
})
app.get('/manager',(req,res)=>{
    console.log(req.query.idx);
   connection.query(`delete from board where idx=${req.query.idx}`,(error,result)=>{
       if(error){
           console.log('del_error');
       }else{
           console.log(result);
           res.send(`삭제되었습니다.`);
       }
   })
})

//물어볼 것 update 하는 방법 칼럼명은 subject로 명시했는데 왜 오류에서는 column명이 값으로 나오는 것인지
// app.get('/modified',(req,res)=>{
//     console.log(req.query);
//     connection.query(`update board set comment=${req.query.content} where subject=${req.query.send_subject}`,(error,result)=>{
//         if(error){
//             console.log("errrrrrror",error);
//         }else{
//             res.send("result",result);
//         }
//     }
//     )
// })

app.listen(3000,()=>{
    console.log('connected');
})