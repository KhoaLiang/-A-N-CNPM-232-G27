const express = require('express')
const settingController = require('../Controller/settingController.js')
const homeController = require('../Controller/homeController.js')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Home
 */

router.get('/', homeController.show)

router.get('/setting', settingController.show)
router.post('/room/add', homeController.addNewRoom)
router.get('/find-new-device', homeController.getNewDevice)

router.post('/device/add', homeController.addNewDevice)
router.get('/device/all', homeController.getAllDevice)
router.get('/device/active', homeController.getAllActiveDevice)
router.post('/device/edit', homeController.updateDevice)
router.post('/device/delete', homeController.deleteDevice)
router.post('/device/toggle', homeController.toggleDevice)

module.exports = router
