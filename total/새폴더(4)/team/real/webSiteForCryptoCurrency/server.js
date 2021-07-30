  
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');
//const { SequelizeScopeError } = require('sequelize/types');
require('dotenv').config();
const env = process.env;
const port = env.SERVER_PORT || 3001;
const cors = require('cors');
const router = require('./routes/index')
const session = require('express-session');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

//app.use(cors);
/*
app.use(session({
    secret:'aaa',
    resave:false,
    saveUninitialized:true,
    cookie:{
        hasonly:true,
        secure:false
    }
}))
*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/',router);


// app.use('/',(req,res)=>{
//     res.render('./index.html');
// })
/*app.use('/',(req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
})
*/
// sequelize.sync({force:true})
// .then(()=>{
//     console.log('succ');
// })
// .catch((err)=>{
//     console.log(err);
// })




app.listen(port, ()=>{
    console.log('it works!',port);
})