/*
게시글 번호
id
pw
name
gender
작성자 
회원이 사용할 경우 userid값 받기
제목
내용
날짜
조회수 
*/

const Sequelize = require('sequelize');

module.exports = class board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            name:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            subject:{
                type:Sequelize.STRING(100),
                allowNull:true,
            },
            content:{ 
                type:Sequelize.TEXT,
                allowNull:true,
            },
            created_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
            hit:{
               type:Sequelize.INTEGER(11),
               defaultValue:0,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Board',
            tableName:'boards',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){}
};
