const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const app = express();
const port = process.env_PORT||8001;

dotenv.config();
const pageRouter = require('./routes/page')

app.set('view engine','html');

app.use(bodyParser.urlencoded({extended:false}));

nunjucks.configure('views',{
    exprss:app,
})

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname,'public')))
// qpp이 사용할 정적 파일의 경로를 연결
// 파일의 이름은 public

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
}));

app.use('/',pageRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err :{};
    res.status(err.status||500);
    res.render('error');
})




app.listen(port,()=>{
    console.log('server start port',port);
})

