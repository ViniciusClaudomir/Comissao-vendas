const Account = require("../layers/User")


const createAccount = async (req, res, next) => {
	const {cpf, name, password} = req.body
	console.log(cpf, name, password)
	account = new Account(name,cpf,password)
	returnByAccount = await account.createAccount()

	res.status(returnByAccount.status).send(returnByAccount)


}
module.exports = {createAccount};