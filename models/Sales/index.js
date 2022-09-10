const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const Sales = database.define('Sales', 
	{
		Sale_id:  {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		Sale_type: {
			type: Sequelize.STRING
		},

		Sale_category: {
			type: Sequelize.STRING
		},

		Sale_value: {
			type: Sequelize.DOUBLE
		},

		Sale_count: {
			type: Sequelize.INTEGER
		},

		Sale_NotaFiscal: {
			type: Sequelize.STRING
		},

		Sale_chassi: {
			type: Sequelize.STRING
		},

		Market_id: {
			type: Sequelize.INTEGER,
			references: {model:"Markets", key: "Market_id"}
		},
		Metric_id: {
			type: Sequelize.INTEGER,
			references: {model: "Metrics", key: "Metric_id"}
		},

		Employee_id: {
			type: Sequelize.INTEGER,
			references: {model: "Employees", key: "Employee_id"}
		}
	}

)

module.exports = Sales;