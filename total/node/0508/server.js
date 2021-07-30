const express = require('express');
const app = express();
const {sequelize} = require('./models');
const {User} = require('./models');
const router = require('./routers/index');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks')
const session = require('express-session');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','html')

nunjucks.configure('views',{
    express:app,
})

app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
}))

sequelize.sync({force:false,})
.then(()=>{
    console.log('접속성공');
})
.catch(()=>{
    console.log('접속실패');
})

app.use('/',router);


app.listen(3000,()=>{
    console.log('server start 3000');
})
