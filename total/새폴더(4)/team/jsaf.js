const Sequelize = require('sequelize');

module.exports = class Item extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_idx:{
                type:Sequelize.INT,
                allowNull:false,
                autoIncrement:true,
            },
            id:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            pw:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            birth:{
                type:Sequelize.STRING(8),
                allowNull:false,
                get: function (){
                    return (this.getDataValue('birth')).format('YYYY-MM-DD');
                }
            },
            gender:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            contact:{
                type:Sequelize.STRING(30),
                allowNull:false,
                get:function (){
                    return (this.getDataValue('contact')).format('000-0000-0000');
                }
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            Modelname:'Item',
            tablename:'items',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}


