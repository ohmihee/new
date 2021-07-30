const express = require('express');
const app = express();
const {sequelize, User} = require('./models');
//{}사용시 소문자 sequelize만 가져오겠다는 것
const nunjucks = require('nunjucks');
const indexRouter = require('./routers');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true
})

app.use('/',indexRouter);

sequelize.sync({force:false}) //new promise 객체로 결과값 반환
// 비동기 통신 사용하겠다는 것
    .then(()=>{
        console.log('데이터베이스 연결성공');
    })
    .catch((err)=>{
        console.error('db연결 실패');
    })
        

// app.get('/',async (req,res)=>{
//     // User.create({
//     //     name:'algml',
//     //     age:26,
//     //     married:false,
//     //     comment:'자기소개',
//     // })
//     const userList = await User.findAll({});
//     console.log(userList[0].dataValues.name);
//     res.send('hello world');
// })




app.listen(3000,()=>{
    console.log('port 3000');
})
