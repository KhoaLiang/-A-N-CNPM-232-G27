const express = require('express')

const isLoggedIn = require('../Controller/isLoggedIn.js')
const settingController = require('../Controller/settingController.js')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Setting
 */

router.get('/', settingController.show)
router.get('/offEnergy', settingController.offEnergy)
router.post('/updateProfile', settingController.updateProfile)
router.post('/changeAddress', settingController.changeAddress)

module.exports = router
