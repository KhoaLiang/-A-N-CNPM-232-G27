const express = require('express')

const userController = require('../Controller/userController.js')
const isLoggedIn = require('../Controller/isLoggedIn.js')

const router = express.Router()

router.get('/login', userController.show)
router.post('/login', userController.login)
router.get('/logout', userController.logout)

module.exports = router
