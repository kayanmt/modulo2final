const Sequelize = require('sequelize')
const connection = require('../database/db')

const filme = connection.define('filme',{
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
},

nome:{
    type:Sequelize.STRING,
    allowNull:false,
},

descricao:{
    type:Sequelize.STRING,
    allowNull:false,
},

tipo:{
    type:Sequelize.STRING,
    allowNull:false,
},

imagem:{
    type:Sequelize.STRING,
    allowNull:false,
},

},
{
freezeTableName :true,
timestamps:false,
createAt:false,
updateAt:false,

}

);

module.exports=filme;