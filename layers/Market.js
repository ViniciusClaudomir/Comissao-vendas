const MarketModel = require("../models/Market")

class Market {

	constructor(market_cnpj, market_name, market_state) {

		this.market_cnpj = market_cnpj
		this.market_name = market_name
		this.market_state = market_state

	}

	async searchMarketByCnpj() {

		const market = await MarketModel.findAll({
			attributes: ['Market_id']
			, where: { Market_cnpj: `${this.market_cnpj}` }
		}).then(e => { return e })

		return market

	}

	async createMarket() {

		const marketBy = {
			Market_cnpj: this.market_cnpj,
			Market_name: this.market_name,
			Market_state: this.market_state
		}

		const market = await this.searchMarketByCnpj()

		if (market.length === 0) {
			await MarketModel.create(marketBy)

			return {
				status: 200,
				message: `Loja ${this.market_cnpj} criado com sucesso.`

			}

		} else {
			return {
				status: 400,
				message: "Loja ja existe"

			}
		}
		//

	}





}


module.exports = Market;