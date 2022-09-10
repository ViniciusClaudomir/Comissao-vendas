const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")


const Goals = database.define('Goals',
	{
		Goals_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		Goals_priority: {

			type: Sequelize.INTEGER,
			defaultValue: 1
		
		},

		Goals_minValue: {
			type: Sequelize.STRING,
			allowNull: false
		},

		Goals_maxValue: {
			type: Sequelize.STRING,
			allowNull: false
		},

		Goals_reward: {
			type: Sequelize.STRING,
			allowNull: false
		}


	}

)

module.exports = Goals;