const Sequelize = require('sequelize')

module.exports = class Weather extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            emo:{
                type:Sequelize.TEXT,
                allowNull:true
            },
            text:{
                type:Sequelize.STRING(100),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Weather',
            tableName:'weathers',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}