const db = require("../database");

const { DataTypes } = require("sequelize");

const categorias = db.define("Categorias",  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    nome: {
        type: DataTypes.STRING,  
    },
   
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
},
{
    tablename: "categorias",
}

)

module.exports = categorias;

