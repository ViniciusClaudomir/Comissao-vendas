const express = require('express')
const router = express.Router()

const {createTypeMetrics, createMetric} = require("../../controllers/Metrics")


router.post("/", createMetric)
router.post("/types",createTypeMetrics)





module.exports = router;