const database = require("../../database/sequelizeConnect")
const Sequelize = require("Sequelize")

const Market = database.define('Markets', {

    Market_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
	Market_state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Market_cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
	Market_name: {
		type: Sequelize.STRING,
		allowNull: false
	},


	Market_active: {
		type: Sequelize.INTEGER,
		defaultValue: 1
	}

   
})
 
module.exports = Market;