const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            comment:{
                type:Sequelize.STRING(100),
                allowNull: false,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:true,
                defaultValue:Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'Comment',
            tableName:"comments",
            paranoid:false,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Comment.belongsTo(db.User, {foreignKey:'commenter', targetKey:'id'});
    }
};
// belongsTo  -> Comment테이블의 로우를 가져올 때 users 테이블의 로우를 가져옴
// Comment모델에 foreighkey인 commenter컬럼을 추가
// Commenter모델의 외래키 칼럼은 commenter이고, User모델의 id컬럼을 가리킨다.
// nodejs 325pg 그림 다시 한 번 확인해볼 것
//  .belongsTo(, {foreignKey:'', targetKey:''});