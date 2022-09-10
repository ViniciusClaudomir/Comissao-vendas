const EmployeeModel = require("../models/Employee")
const MarketLayer = require("./Market")
const AccountLayer = require("./User")

class Employee {

	constructor(user_cpf, employee_market, employee_name, employee_role) {

		this.user_cpf = user_cpf
		this.employee_name = employee_name
		this.employee_role = employee_role
		this.employee_market = employee_market


	}



	async searchEmployeeByUserId(user_id) {

		const employee = EmployeeModel.findAll({attributes:["Employee_id"], where: { User_id: user_id } }).then(e => { return e })
		return employee
	}

	async validate() {

		const account = new AccountLayer(null, this.user_cpf, null, null)
		const market =  new MarketLayer(this.employee_market, null, null)

		const accountByCpf = await account.searchAccountByCpf()
		const marketByCnpj = await market.searchMarketByCnpj()

		if (accountByCpf.length === 0) {

			return false

		} else if (marketByCnpj.length === 0) {

			return false

		}
		console.log(marketByCnpj[0].Market_id, accountByCpf[0].User_id)
		return {
			market: marketByCnpj[0].Market_id,
			account: accountByCpf[0].User_id
		}





	}

	async createEmployee ()  {

		const returnValidates  = await this.validate()
		if (returnValidates === false){
			return {

				status: 500,
				message: "Erro na validacao dos dados"

			}
		}

	
		const {market, account} = returnValidates
		const valdiateUserCreate = await this.searchEmployeeByUserId(account)

		if (valdiateUserCreate.length > 0){
			return {

				status: 400,
				message: "Usuario ja existe!"

			}
		}


		const employeeBy = {
			User_id: account,
			Employee_name: this.employee_name,
			Employee_market: market,
			Employee_role: this.employee_role

		}

		await EmployeeModel.create(employeeBy)
		return {
			status: 200,
			message: "Funcionario criado com sucesso!"

		}


	}




}

module.exports = Employee