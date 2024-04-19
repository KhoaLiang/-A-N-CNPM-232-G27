const express = require('express')

const isLoggedIn = require('../Controller/isLoggedIn.js')
const statisticController = require('../Controller/statiticsController.js')

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Statistic:
 *       type: object
 *       required:
 *         - deviceId
 *         - data
 *       properties:
 *         deviceId:
 *           type: Number
 *         data:
 *           type: Array
 *       example:
 *         deviceId: 1
 *         data: Array
 */

/**
 * @swagger
 * tags:
 *   name: Statistics
 */

/**
 * @swagger
 * /statistic:
 *   get:
 *     summary: Returns totalWh
 *     tags: [Statistics]
 *     responses:
 *       200:
 *         description: Returns totalWh
 */
router.get('/', statisticController.show)

/**
 * @swagger
 * /statistic/devices:
 *   get:
 *     summary: Returns all devices and rooms
 *     tags: [Statistics]
 *     responses:
 *       200:
 *         description: Returns all devices
 */

router.get('/devices', statisticController.getAllDevice)

/**
 * @swagger
 * /statistic/data:
 *   get:
 *     summary: Returns TotalkWhPerDay
 *     tags: [Statistics]
 *     responses:
 *       200:
 *         description: Returns TotalkWhPerDay
 */

router.get('/data', statisticController.getTotalkWhPerDay)

module.exports = router
