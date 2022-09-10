const express = require('express')
const router = express.Router()

const { createSale } = require("../../controllers/Sale")


router.post("/", createSale)

module.exports = router;