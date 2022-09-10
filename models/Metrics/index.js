const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const Metrics = database.define('Metrics', 
{

	Metric_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	Metric_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	TypeMetrics_id: {
		type: Sequelize.INTEGER,
		references: { model: "TypeMetrics", key: "TypeMetrics_id" }
	}
})

module.exports = Metrics;