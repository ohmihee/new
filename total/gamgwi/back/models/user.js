const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(10),
                allowNull:false
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:true
            },
            passWord:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            email:{
                type:Sequelize.STRING(50),
                allowNull:true,
                unique:true
            },
            number:{
                type:Sequelize.INTEGER,
                allowNull:false,
                unique:true
            },
            nickname:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            birth:{
                type:Sequelize.DATE,
                allowNull:false,
                get:function(){
                    return moment(this.getDataValue('birth')).format('YYYY-MM-DD')
                }
            },
            level:{
                type:Sequelize.STRING(20),
                allowNull:false,
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }

}