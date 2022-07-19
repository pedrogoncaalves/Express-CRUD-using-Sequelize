const Sequelize = require('sequelize');

const DB_name = 'produto';
const DB_user = 'root';
const DB_pass = 'Gado$2118';
const DB_config = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
};

let db = {};

try {
    db = new Sequelize (DB_name,  DB_user, DB_pass, DB_config)
} catch(error) {
    console.error('Erro ao tentar uma conexão com o banco de dados');}

async function hasConection() {
    try {
        await db.authenticate(); 
        console.log('Banco de dados conectado')

    }catch (error) {
    console.error('Erro ao tentar se conectar ao banco de dados')
    }
}


Object.assign(db, {
     hasConection,
})

module.exports = db;