const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.controller')

router.post('/users/register', registerController.registerUser)

module.exports = router;