const Market = require("../layers/Market")


const createMarket = async (req, res, next) => {


	const {cnpj, name, state} = req.body
	console.log(cnpj, name, state)
	market = new Market(cnpj, name, state)
	returnByMarket = await market.createMarket()

	res.status(returnByMarket.status).send(returnByMarket)


}
module.exports = {createMarket};