

const debug = (req, res, next) => {
	let dateCurrent = new Date()
	dateString =  dateCurrent.toLocaleString()
	console.log(`${dateString} ${req.path}`)
	next()

}

module.exports = debug;