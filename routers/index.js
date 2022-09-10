const express = require('express');
const router = express.Router()

const account = require("./User")
const market = require("./Market")
const employee = require("./Employee")
const metrics = require("./Metrics");
const sales = require("./Sale")

router.use("/market", market)
router.use("/user", account)
router.use("/employee", employee)
router.use("/metrics", metrics)
router.use("/sales", sales)


module.exports = router;