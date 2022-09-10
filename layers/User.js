const User = require("../models/User")


class Account {

	constructor(name, cpf, password, id = null) {

		this.id = id
		this.name = name
		this.cpf = cpf
		this.password = password

	}

	async searchAccountById() {

		const user = User.findAll({ where: { User_id: `${this.id}` } }).then(e => { return e })
		return user

	}

	async searchAccountByCpf() {

		const user = User.findAll({
			attributes: ['User_id'],
			where: { User_cpf: `${this.cpf}` }
		}).then(e => { return e })
		return user

	}

	async createAccount() {

		const accountBy = {
			User_cpf: this.cpf,
			User_Name: this.name,
			User_Password: this.password
		}

		const user = await this.searchAccountByCpf()

		if (user.length === 0) {
			await User.create(accountBy)

			return {
				status: 200,
				message: `Usuario ${this.cpf} criado com sucesso.`

			}

		} else {
			return {
				status: 400,
				message: "Usuario ja existe"

			}
		}
		//

	}


}

module.exports = Account;