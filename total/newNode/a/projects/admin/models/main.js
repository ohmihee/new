const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Main extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            mainBoard:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            subBoard:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            watchaut:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:0,
            },
            url:{
                type:Sequelize.STRING(100),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Main',
            tableName:'mains',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Main.hasMany(db.Submain,{foreignKey:'mainBoard',sourceKey:'mainBoard'})
    }
}
   