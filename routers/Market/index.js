const express = require('express')
const router = express.Router()

const {createMarket} = require("../../controllers/Market")


router.post("/",createMarket)





module.exports = router;