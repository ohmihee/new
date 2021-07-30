// sequelize => mysql작업을 쉽게 할 수 있도록 도와주는 라이브러리(ORM의 일종)
// ORM :objected relational mapping => 객체와 관계를 맵밍해주는 것
// 코드의 가독성을 높여준다.
/* 
   sql문을 사용하지 않고 해당 언어, 여기서는 자바스크립트 언어를 통해
   db사용 가능
*/
//시퀄라이즈를 통해 익스프레스 앱과 mysql을 연결
/*
설치
-> npm i express morgan nunjucks sequelize sequelize-cli mysql2
-> npm i -D nodemon
//sequelize-cli : 시퀼라이즈 명령어 실행을 위한 패키지
//mysql2:mysql과 시퀄라이즈를 이어주는 드라이버
설치 후
-> sequelize init 명령어 입력 / npx sequelize init   
*/
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// morgan은 로그 관리를 위한 미들웨어 
// 요청에 대한 정보를 console에 기록해준다.
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
//require('./models')는 require('./modes/index.js')와 같다.
//해당 폴더 내의 index.js파일은 require시 생략 가능
//index.js파일을 통해 db를 가져온 것.
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments')

app.set('port',process.env.PORT || 3001);
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true,
});

sequelize.sync({ force: false })
//db.sequelize를 불러와서 sync 메서드를 사용해 서버 실행 시 mysql과 연동되도록 함
// 해당 force:true로 설정시 서버 실행 시마다 테이블 재생성 즉 테이블 잘못 만든 경우 사용

    .then(()=>{
        console.log('데이터베이스 연결성공');
    })
    .catch((err)=>{
        console.error(err);
    })

    app.use(morgan('dev'));
    //morgan의 인자값으로 줄 수 있는 옵션값
    //어떻게 요청에 대한 정보를 가져올지 결정
    // dev / short / common / combined 등
    app.use(express.static(path.join(__dirname, "public")));
    // 정적 파일을 가져오는 폴더는 public로 하겠다.
    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));

    app.use('/',indexRouter);
    app.use('/users',usersRouter);
    app.use('/comments',commentsRouter);

    app.use((req, res, next) => {
        const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
        error.status = 404;
        // 404에러가 발생하면
        next(error);
      
    });

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
        res.status(err.status || 500);
        res.render('error');
    });

    app.listen(app.get('port'),()=>{
        console.log(app.get('port'),'번 포트에서 대기중');
    });
