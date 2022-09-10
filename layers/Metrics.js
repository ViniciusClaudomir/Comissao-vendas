const MetricsModel = require("../models/Metrics")
const TypeMetricsModel = require("../models/Metrics/typeMetrics")
const TypeMetricsLayer = require("../layers/TypeMetrics")
const GoalsModel = require("../models/Goals")
const CalculateModel = require("../models/Calculate")

class Metrics {

	constructor(name) {

		this.name = name
	}

	async searchMetricByName() {

		const metric = await MetricsModel.findAll({ attributes: ['Metric_id'], where: { Metric_name: this.name } }).then(e => { return e })
		return metric
	}

	async validate(typeMetricName) {

		const typeMetric = await TypeMetricsModel.findAll({ attributes: ['TypeMetrics_id'], where: { TypeMetrics_name: typeMetricName } }).then(e => { return e })
		const validateTypeMetric = await typeMetric

		if (validateTypeMetric.length === 0) {
			return false
		}

		return true


	}

	async createMetric(typeMetric, goals) {

		if (await this.validate(typeMetric) === false) {
			return {
				status: 400,
				message: "Erro em validacao"
			}
		}

		const typeMetricLayer = new TypeMetricsLayer(typeMetric)
		const typeMetricId = await typeMetricLayer.searchMetricByName()

		const goals_id = []
		for (let goal in goals) {
			const goal_id = await GoalsModel.create(goals[goal])
			goals_id.push(goal_id.Goals_id)
		}

		const metricsBy = {
			Metric_name: this.name,
			TypeMetrics_id: typeMetricId[0].TypeMetrics_id

		}

		const metricById = await MetricsModel.create(metricsBy)
		for (let goal_id in goals_id) {
			CalculateModel.create({

				Metrics_id: metricById.Metric_id,
				Goal_id: goals_id[goal_id]

			})

		}

		return {
			status: 200,
			message: "Metrica gerada com sucesso"
		}




	}

}

module.exports = Metrics;