//npx sequelize db:careate

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser')

dotenv.config();
const app = express();
const router = require('./router')

const { sequelize } = require('./models');
const passportConfig = require('./passport/index');


passportConfig();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.use(session({
  secret:'aaa',
  resave:false,
  saveUninitialized:true,
}))

sequelize.sync({ force:false })
.then(() => {
    console.log('데이터 베이스 성공');
})
.catch((err)=>{
    console.error(err);
});


nunjucks.configure('views', {
    express: app
});


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use('/',router);


app.listen(8001,()=>{
    console.log(`start server 3000`);
})