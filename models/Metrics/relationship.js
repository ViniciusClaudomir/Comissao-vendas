const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")


const RelationshipMetrics = database.define('RelationshipMetrics', 
{

	Metric_id: {
		type: Sequelize.INTEGER,
		references: {model:"Metrics", key: "Metric_id"}
	},
	Market_id: {

		type: Sequelize.INTEGER,
		references: {model:"Market", key: "Market_id"}
	},
	Employee_id: {

		
		type: Sequelize.INTEGER,
		references: {model:"Employee", key: "Employee_id"}

	}

})

module.exports = RelationshipMetrics;