const express = require('express');
const router = express.Router();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql = require('mysql');

router.use(bodyParser.urlencoded({extended:false}));

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'midas3356',
    database:'page',
});

router.get('/',(req,res)=>{
   
    let sql = `select * from board`;
    connection.query(sql,(error,results)=>{
        if(error){
            console.log(req);
            console.log('errorrr');
        }else{
            connection.query(`select numbers,category,subject,hit,content,open_status,status,DATE_FORMAT(date, "%Y-%m-%d")as date from board`,(error,result)=>{
                if(error){
                    console.log('errorrrrr');
                }else{
                    console.log('result');
                    res.render('list.html',{
                        list:results,
                       
                    })
                }
            })
        }
    })
})
router.get('/write',(req,res)=>{
    res.render('write.html')
})

router.get('/listDetail',(req,res)=>{
    console.log(req.query.numbers);
    connection.query(`select numbers,status,subject,open_status,status,date_format(date, "%Y-%m-%d") as date from board where numbers=${req.query.numbers}`,(error,result)=>{
        if(error){
            console.log('errorrrrrrrrrrrrrrrrrrrrrrr',error)
        }else{
            res.render('board/listdetail.html',{
                list:result[0],
            });
            
        }
    })
})

router.post('/write',(req,res)=>{
   console.log("body",req.body);
   let subject = req.body.subject;
   let customer = req.body.customer;
   let product = req.body.product;
   let kind = req.body.kind;
   let business = req.body.business;
   let status = req.body.status;
   let site = req.body.site;
   let open = req.body.open;
   let content = req.body.content;
   let sql = `insert into board(subject,open_status,status,content,product_category,siteInfo)
                values('${subject}','${open}','${kind}','${content}','${product}','${site}')`;
   connection.query(sql,(error,result)=>{
       if (error){
           console.log('error');
       }else{
           res.redirect('./')
       }
   })    
})


// res.render('list.html',{
    //     let sql = `select * from board where`
    // })
// router.get('/write',(req,res)=>{
//     res.send('');
// })






module.exports = router;