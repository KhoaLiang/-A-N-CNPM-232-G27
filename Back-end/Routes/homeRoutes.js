const express = require('express')
const settingController = require('../Controller/settingController.js')
const homeController = require('../Controller/homeController.js')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Home
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Return list devices of room
 *     tags: [Home]
 *     responses:
 *       200:
 *         description:  Return list devices of room
 */

router.get('/', homeController.show)

router.get('/setting', settingController.show)

/**
 * @swagger
 * /room/add:
 *   post:
 *     summary: Add a new room
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Add room successfully

 */

router.post('/room/add', homeController.addNewRoom)

/**
 * @swagger
 * /find-new-device:
 *   get:
 *     summary:  Return list port that devices can connect
 *     tags: [Home]
 *     responses:
 *       200:
 *         description:   Return list port that devices can connect
 */

router.get('/find-new-device', homeController.getNewDevice)

router.post('/device/add', homeController.addNewDevice)
router.get('/device/all', homeController.getAllDevice)
router.get('/device/active', homeController.getAllActiveDevice)
router.post('/device/edit', homeController.updateDevice)
router.post('/device/delete', homeController.deleteDevice)
router.post('/device/toggle', homeController.toggleDevice)

module.exports = router
