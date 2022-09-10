const Sequelize = require("sequelize"); // importar o sequelize

const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
console.log(dbHost, dbName)
const db = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`, {dialect: 'postgres'});

module.exports= db; //exportar