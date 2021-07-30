const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    // User가 sequelize.Model을 상속받음
    // User모델을 만들고 모듈로 export함
    // User모델은 Sequelize.Model을 확장한 클래스로 선언한 것
    // 모델은 크케 static init메서드와 static associate메서드를 나뉨
    /*
     static init()
    ->테이블에 대한 설정을 함
    Q)return은 보통 마지막에 하고 메서드를 끝냈는데 맨 앞으로 와서 어떻게 작용되는가?
     */
     static init(sequelize) {
        return super.init({
            //super init메서드의 첫번째 인수 : 테이블 칼럼에 대한 설정
            //                  두번째 인수 : 테이블 자체의 설정
            name:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            age:{
                type:Sequelize.INTEGER.UNSIGNED,
                allowNull:false,
            },
            married:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            comment:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            }
            /* 
            mysql         /  sequelize
            VARCHAR(100)  /   STRING(100)
            INT           /   INTEGER
            TINYINT       /   BOOLEAN
            DATETIME      /   DATE
            INT UNSIGNED  /   INTEGER.UNSIGNED
            NOT NULL      /   allowNull: false
            UNIQUE        /   unique: true
            DEFAULT now() /   defaultValue: Sequelize.NOW 
            */

         },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    /*
    sequelize
    timestamps -> 자동으로 시간에 대한 컬럼 추가하는 기능
    underscored
    modelName
    tableName
    paranoid
    charset / collate -> 한글과 이모티콘 관련 설정
    */


    /*
    static assocliate()
    // 다른 모델들과의 관계를 적는다.
    */
    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey:'id'});
    //users 테이블의 로우를 불러올 때 Comment테이블의 로우들도 같이 불러올 수 있음
    }
};
// hasMany()  ->  1:n 관계를 표현
// N:M 관계/ 1:1 관계 nodejs 책 327pg 공부할 것
// belongsTo
// User의 id는 hasmany의 sourcekey이자 belongsTo의 targetkey이다.
// 다른 모델의 정보에 들어가는 테이블에 belongsTo를 사용
// .hasMany(, {foreignKey: '', sourceKey:'id'});

