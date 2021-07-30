const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

app.set('port',process.env.port || 3002);
app.set('view engine', 'html');
nunjucks.configuer('views',{
    express:app,
    watch:true,
})