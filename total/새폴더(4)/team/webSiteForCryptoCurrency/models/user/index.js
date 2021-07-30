const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true,       
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull:false
            },
            username:{
                type:Sequelize.STRING(20),
                allowNull:false,                
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            birth:{
                type:Sequelize.STRING(8),
                allowNull:false,
                get:function

            }
        })
    }
}