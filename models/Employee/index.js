const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const Employee = database.define('Employees', {

	Employee_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	User_id: {
		type: Sequelize.INTEGER,
		references: { model: "Users", key: "User_id" }
	},
	Employee_name: {
		type: Sequelize.STRING,
		allowNull: false
	},

	Employee_market: {
		type: Sequelize.INTEGER,
		references: { model: "Markets", key: "Market_id" }

	},

	Employee_role: {
		type: Sequelize.STRING
	},

	Employee_active: {
		type: Sequelize.INTEGER,
		defaultValue: 1
	}


})

module.exports = Employee;