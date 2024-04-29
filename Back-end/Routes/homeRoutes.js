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

/**
 * @swagger
 * /device/add:
 *   post:
 *     summary: Add a new device
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceName:
 *                 type: string
 *               deviceId:
 *                  type: number
 *               deviceType:
 *                  type: string
 *               roomId:
 *                  type: number
 *     responses:
 *       200:
 *         description: Add a new device
 */

router.post('/device/add', homeController.addNewDevice)

/**
 * @swagger
 * /device/all:
 *   get:
 *     summary:  Return list devices of Home
 *     tags: [Home]
 *     responses:
 *       200:
 *         description:   Return list devices of Home
 */

router.get('/device/all', homeController.getAllDevice)

/**
 * @swagger
 * /device/all:
 *   get:
 *     summary:  Return list devices are running
 *     tags: [Home]
 *     responses:
 *       200:
 *         description:   Return list devices are running
 */

router.get('/device/active', homeController.getAllActiveDevice)

/**
 * @swagger
 * /device/edit:
 *   post:
 *     summary: Edit name of device
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                  type: number
 *               deviceName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Edit name of device
 */

router.post('/device/edit', homeController.updateDevice)

/**
 * @swagger
 * /device/delete:
 *   post:
 *     summary: Delete a device
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                  type: number
 *     responses:
 *       200:
 *         description:  Delete a device successful
 */

router.post('/device/delete', homeController.deleteDevice)

/**
 * @swagger
 * /room/delete:
 *   post:
 *     summary: Delete a room and all devices in it
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                  type: number
 *     responses:
 *       200:
 *         description:  Delete a room and all devices in it successful
 */

router.post('/room/delete', homeController.deleteRoom)

/**
 * @swagger
 * /device/toggle:
 *   post:
 *     summary: Turn on/off a device
 *     tags: [Home]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deviceId:
 *                  type: number
 *               deviceType:
 *                 type: string
 *               status:
 *                  type: string
 *     responses:
 *       200:
 *         description:  Turn on/off a device successful
 */

router.post('/device/toggle', homeController.toggleDevice)

module.exports = router
