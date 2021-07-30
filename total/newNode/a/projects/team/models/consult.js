const Sequelize = require('sequelize')

module.exports = class Community extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type:Sequelize.STRING(50),
                allowNull:false,
            },
            watch:{
                type:Sequelize.BOOLEAN,
            },
            writer:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            date:{
                type:Sequelize.DATE,
                allowNull:false,
            },
            count:{
                type:Sequelize.INTEGER,
                

            },
            file:{

            }
        })
    }
}