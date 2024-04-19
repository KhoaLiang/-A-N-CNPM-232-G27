const express = require('express')

const userController = require('../Controller/userController.js')
const isLoggedIn = require('../Controller/isLoggedIn.js')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Authentications
 */

router.get('/login', userController.show)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Authentications]
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
 *     responses:
 *       200:
 *         description: Login was successful
 *       400:
 *         description: Please provide email and password!
 *       401:
 *         description: Incorrect email or password!
 */

router.post('/login', userController.login)

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     summary: Logout
 *     tags: [Authentications]
 *     responses:
 *       200:
 *         description: Logout
 */

router.get('/logout', userController.logout)

module.exports = router
