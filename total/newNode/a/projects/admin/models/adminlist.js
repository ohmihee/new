const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class Adminlist extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull:false
            },
            idx:{
                type:Sequelize.STRING(30),
                allowNull:false,
                unique:true,
            },
            psw:{
                type:Sequelize.STRING(255),
                allowNull:false,
            },
            birth:{
                type:Sequelize.DATE,
                allowNull:false,
                get: function(){
                    return moment(this.getDataValue('birth')).format('YYYY-MM-DD')
                }
            },
            courseName:{
                type:Sequelize.STRING(30),
                allowNull:true,
            },
            level:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            tel:{
                allowNull:false,
                unique:true,
                type:Sequelize.INTEGER
            },
            startDate:{
                allowNull:false,
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('startDate')).format('YYYY-MM-DD')
                }
            },
            email:{
                type:Sequelize.STRING(50),
                allowNull:false 
            },
            img:{
                type:Sequelize.TEXT,
                allowNull:true
            }
            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Adminlist',
            tableName:'adminlist',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate (db){
        db.Adminlist.hasMany(db.Community,{foreignKey:'writer',sourceKey:'idx'})
        db.Adminlist.hasMany(db.Course,{foreignKey:'idx',sourceKey:'idx'})
    }
}