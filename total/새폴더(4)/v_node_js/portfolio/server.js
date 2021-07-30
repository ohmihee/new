const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

app.use('/',main);

app.use((req,res)=>{
    res.status(404).send('페이지 존재하지 않음');
})

app.listen(3000,()=>{
    console.log('server start port 3000');
})


