const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userid:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Login',
            tableName:'logins',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}