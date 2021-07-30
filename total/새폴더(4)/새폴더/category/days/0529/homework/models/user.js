const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            birth:{
                type:Sequelize.STRING(40),
                allowNull:false,
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false
            },
            userid:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true,
            },
            userpw:{
                type:Sequelize.STRING(40),
                allowNull:false,
            },
            phoneNumber:{
                type:Sequelize.STRING(40),
                allowNull:false,
            },
            email:{
                type:Sequelize.STRING(50),
                unique:true,
                allowNull:false,

            },
            
            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users2',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',

        })
    }


}