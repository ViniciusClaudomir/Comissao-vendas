const Sale = require("../layers/Sales")


const createSale = async (req, res, next) => {

	 const {

			type,
			categorie,
			value,
			count,
			notafiscal,
			chassi,
			cnpj,
			metric,
			cpf

	 } =  req.body

	 const sale = new Sale(type, categorie, count, value, notafiscal, chassi, cnpj, metric, cpf)
	 const returnBySale = await sale.createSale()

	 res.status(returnBySale.status).send(returnBySale)
}

module.exports = {createSale};