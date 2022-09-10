const TypeMetrics = require("../layers/TypeMetrics")
const Metrics = require("../layers/Metrics")

const createTypeMetrics = async (req, res, next) => {

	const {name} = req.body
	const type = new TypeMetrics(name)
	
	returnByMetrics = await type.createTypeMetrics()
	res.status(returnByMetrics.status).send(returnByMetrics)

}

const createMetric = async (req, res, next) => {

	const {name, type_metric, goals} = req.body
	const metrics = new Metrics(name)
	returnByMetrics = await metrics.createMetric(type_metric, goals)

	res.status(returnByMetrics.status).send(returnByMetrics)


	

}


module.exports = {createTypeMetrics, createMetric}