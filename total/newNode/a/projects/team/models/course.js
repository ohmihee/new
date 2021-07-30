const Sequelize = require('sequelize')

module.exports = class Course extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true,
            },
            img:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            info:{
                type:Sequelize.TEXT,
                allowNull:false,
            },
            section:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
            status:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            duration:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
            time:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
            pay:{
                type:Sequelize.INTEGER,
                allowNull:true,

            }            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'course',
            tableName:'courses',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}