const SaleModel = require("../models/Sales")
const MarketLayer = require("../layers/Market")
const MetricsLayer = require("../layers/Metrics")
const EmployeeLayer = require("../layers/Employee")
const AccountLayer = require("../layers/User")

class Sale {


	constructor(type, categorie, count, value, notafiscal, chassi, market, metric, employee){

		this.type = type
		this.categorie = categorie
		this.count = count
		this.value = value
		this.notafiscal = notafiscal
		this.chassi = chassi
		this.market = market
		this.metric = metric
		this.employee = employee

	}


	async createSale(){

		const account = new AccountLayer(null, this.employee, null, null)
		const market = new MarketLayer(this.market)
		const metric = new MetricsLayer(this.metric)

		const marketById = await market.searchMarketByCnpj()
		const metricById = await metric.searchMetricByName()
		const accountById = await account.searchAccountByCpf()
		
		if (marketById.length === 0 || metricById.length === 0 || accountById.length === 0){
			return {

				status: 400,
				message: "Erro na validacao dos dados."
			}
		}
		const employee = new EmployeeLayer(accountById)
		const employeeById = await employee.searchEmployeeByUserId(accountById[0].User_id)

		const saleBy = {

			Sale_type: this.type,
			Sale_category: this.categorie,
			Sale_value: this.value,
			Sale_count: this.count,
			Sale_NotaFiscal: this.notafiscal,
			Sale_chassi: this.chassi,
			Market_id: marketById[0].Market_id,
			Metric_id: metricById[0].Metric_id,
			Employee_id: employeeById[0].Employee_id


		}

		await SaleModel.create(saleBy)
		return {

			status: 200,
			message: "Venda registrada com sucesso"
		}


	}


}

module.exports = Sale;