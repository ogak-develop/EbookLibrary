const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.controller')
const registerDoc = {
/**
 * @swagger
 *
 * /api/v1/users/register:
 *   post:
 *     description: Register to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User's name
 *         description: User's name
 *         in: JSON
 *         required: true
 *         type: string
 *       - email: example@emailprovider.com
 *         description: Use valid email to registration
 *         in: JSON
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: JSON
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: lRegistration
 */
}
router.post('/users/register', registerController.registerUser)

module.exports = router;