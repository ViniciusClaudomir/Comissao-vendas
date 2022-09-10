const dotenv = require('dotenv')
dotenv.config(path='./.env')

const express = require('express')
const middlawereDebug = require('./middleware/debug')
const db = require('./database/sequelizeConnect')
const routers = require("./routers")


const app = express()
const port = process.env.PORT
app.use(express.json());  
app.use(middlawereDebug)
app.use(routers)

app.get('/healtcheck', (req, res) => {
  res.status(200).send({
	message:"Server initializer."
  })
})

// app.use('*', (req, res, next) => {

//   res.status(404).send({
//     message: "Not found"
//   })

// })


db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(port, () => {
  console.log(`Server run in: ${port}`)
})
