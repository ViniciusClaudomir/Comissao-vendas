const express = require('express')
const router = express.Router()

const { createEmployee } = require("../../controllers/Employee")


router.post("/",createEmployee)





module.exports = router;