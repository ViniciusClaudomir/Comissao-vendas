const TypeMetricsModel = require("../models/Metrics/typeMetrics")

class TypeMetrics {

	constructor(name){
		this.name = name
	}

	async searchMetricByName(){

		const typeM = await TypeMetricsModel.findAll({attributes:['TypeMetrics_id'], where: {TypeMetrics_name: this.name}})
		return typeM
	
	}

	async createTypeMetrics(){

		const typeM = await this.searchMetricByName()

		if (typeM.length > 0) {
			return  { 	
				status:400,
				message: "Tipo de metrica ja existe."

			}
		}

		TypeMetricsModel.create({TypeMetrics_name: this.name})
		return {

			status: 200,
			message: `Tipo: ${this.name} criado com sucesso`

		}

	}
}


module.exports = TypeMetrics;