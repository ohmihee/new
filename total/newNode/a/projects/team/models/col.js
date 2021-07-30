const Sequelize = require('sequelize')

module.exports = class Col extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            boardName:{
                type:Sequelize.STRING(20),
                allowNull:false,
                unique:true
            },
            boardType:{
                type:Sequelize.STRING(10),
                allowNull:false
            },
            content:{
                type:Sequelize.TEXT,
                allowNull:false
            },
            watch:{
                type:Sequelize.STRING(5),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'col',
            tableName:'cols',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}