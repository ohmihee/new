const Sequelize = require('sequelize')

module.exports = class Community extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            watch:{
                type:Sequelize.BOOLEAN,
                allowNull:true,
            },
            writer:{
                type:Sequelize.STRING(30),
                allowNull:false
            },
            date:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            count:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            file:{
                type:Sequelize.TEXT,
                allowNull:true
            }            
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'notice',
            tableName:'notices',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}