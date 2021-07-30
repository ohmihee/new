const Sequelize = require('sequelize');
// Sequelize는 시퀄라이즈 패키지이자 생성자
const User = require('./user');
const Comment = require('./comment')
// 같은 폴더에 존재하는 user와 comment파일 가져와서 변수에 담기

const env = process.env.NODE_ENV || 'development';
//즉 환경변수를 development로 설정하여 env에 담은 것
// config/config.json파일 참고
//즉 배포 상태로 하려면 production으로 설정하고 
//해당 config/config.json파일의 production속성을 수정하면 된다.
const config = require('../config/config.json')[env];
// config/config.json에서 데이터베이스 설정을 불러온 후 new Sequelize를 통해 mysql에 연결 객체 생성

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
//시퀄라이즈를 통해 익스프레스 앱과 mysql을 연결

db.sequelize = sequelize;
// 나중에 연결 객체의 재사용을 위해 db.sequelize에 할당

db.User = User;
db.Comment = Comment;
//db에 User와 Comment를 담음
// -> 즉 db객체를 require하여 User와 Comment모델에 접근 가능해짐

User.init(sequelize);
Comment.init(sequelize);
//.init()은 각각의 모델의 static.init메서드 호출하는 것
// init을 통해 테이블이 모델과 연결

User.associate(db);
Comment.associate(db);
//Q)init()과 associate()가 어떠한 역할을 하는 것인가? ------------------------------------
// associate메서드를 다른 테이블과의 관계를 연결

module.exports = db;
// 다른 곳에서 사용할 수 있도록 내보내는 것
