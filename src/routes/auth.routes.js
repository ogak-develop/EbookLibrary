const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

//Authenticate user
router.post('/auth/login', authController.authUser)

module.exports = router;