const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const typeMetrics = database.define('TypeMetrics', 
{

	TypeMetrics_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	TypeMetrics_name: {
		type: Sequelize.STRING,
	},

})

module.exports = typeMetrics;