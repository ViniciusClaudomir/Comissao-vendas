const Employee = require("../layers/Employee")


const createEmployee = async (req, res, next) => {


	const {cpf, cnpj, name, role} = req.body
	console.log(cpf, cnpj, name, role)
	const employee = new Employee(cpf, cnpj, name, role)
	returnByEmployee = await employee.createEmployee()

	res.status(returnByEmployee.status).send(returnByEmployee)


}
module.exports = {createEmployee};