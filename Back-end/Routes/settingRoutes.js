const express = require('express')

const isLoggedIn = require('../Controller/isLoggedIn.js')
const settingController = require('../Controller/settingController.js')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Setting
 */

/**
 * @swagger
 * /setting:
 *   get:
 *     summary: Return information of user
 *     tags: [Setting]
 *     responses:
 *       200:
 *         description:  Return information of user
 */

router.get('/', settingController.show)

/**
 * @swagger
 * /setting/offEnergy:
 *   get:
 *     summary: Turn off all devices in the home
 *     tags: [Setting]
 *     responses:
 *       200:
 *         description:  Turn off all devices in the home
 */

router.get('/offEnergy', settingController.offEnergy)

/**
 * @swagger
 * /setting/updateProfile:
 *   post:
 *     summary: Update profile
 *     tags: [Setting]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:  
 *                 type: string
 *     responses:
 *       200:
 *         description: Update user successfully

 */

router.post('/updateProfile', settingController.updateProfile)

/**
 * @swagger
 * /setting/changeAddress:
 *   post:
 *     summary: Change address of home
 *     tags: [Setting]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               address:   
 *                 type: string
 *     responses:
 *       200:
 *         description: Update your address successfully

 */

router.post('/changeAddress', settingController.changeAddress)

module.exports = router
