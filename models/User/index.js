const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const User = database.define('Users', {

    User_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    User_cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
	User_Name: {
		type: Sequelize.STRING,
		allowNull: false
	},

	User_Password: {
		type: Sequelize.STRING
	},

	User_Active: {
		type: Sequelize.INTEGER,
		defaultValue: 1
	}

   
})
 
module.exports = User;