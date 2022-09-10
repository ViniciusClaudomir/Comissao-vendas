const express = require('express')
const router = express.Router()

const {createAccount} = require("../../controllers/User")


router.post("/",createAccount)





module.exports = router;