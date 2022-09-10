const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")


const Calculate = database.define('CalculateMetrics', 
{	
	CalculateMetrics_id:  {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	Metrics_id: {
		type: Sequelize.INTEGER
	},
	Goal_id: {

		type: Sequelize.INTEGER,
		references: {model: "Goals", key: "Goals_id"}

	}
	


})

module.exports = Calculate;