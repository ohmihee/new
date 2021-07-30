// -> sql문
// -> sequelize쿼리
//로우를 생성하는 쿼리---------------------------------------
/*
->sql문
INSERT INTO nodejs.users(name,age,married,comment) VALUES('zero',24,0,'자기소개1);
*/
//-> sequelize
// const { User } = require('../models');
// User.create({
//     name:'zero',
//     age:24,
//     married:false,
//     comment:'자기소개1'
// })

//로우를 조회하는 쿼리-------------------------------
/*
->sql문
/users테이블의 모든 데이터를 조회 findAll() 메서드를 사용
SELECT * FROM nodejs.users;
User.findAll({})
/users테이블의 데이터 하나만 조회 findone()사용
SELECT * FROM nodejs.users LIMIT 1;
User.findone({});
/특정 컬럼만 가져오는 경우 attribute옵션 사용
330pg

*/

