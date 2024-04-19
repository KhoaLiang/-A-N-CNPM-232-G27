const express = require('express')

const isLoggedIn = require('../Controller/isLoggedIn.js')
const statisticController = require('../Controller/statiticsController.js')

const router = express.Router()

router.get('/', statisticController.show)
router.get('/devices', statisticController.getAllDevice)
router.get('/data', statisticController.getTotalkWhPerDay)

module.exports = router
