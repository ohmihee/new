const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const {User} = require('./models');
//const sequelzie = require('sequelize');

app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
});


app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.send('server 3000')
})

app.listen(3000,()=>{
    console.log('server start 3000')
})