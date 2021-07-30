const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            date:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get:function(){
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD-hh-mm-dd')
                }                
            },
            writer_name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            hit:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            like:{
                type:Sequelize.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            content:{
                type:Sequelize.STRING(300),
                allowNull:true
            },
            report:{
                type:Sequelize.STRING(50),
                allowNull:false,
                defaultValue:0,
                comment:'신고'
            },
            watch:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
                defaultValue:0
            },
            category:{
                type:Sequelize.STRING(20),
                allowNull:true,
            },
            emo_idx:{
                type:Sequelize.INTEGER,
                unique:True,
                allowNull:false,
                comment:'날씨이모티콘idx'
            }
        },{
            sequelize,
            timestamps:false,
            modelName:'Board',
            tableName:'boards',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}