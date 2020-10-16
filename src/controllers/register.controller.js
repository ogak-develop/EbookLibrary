const registerServices = require('../services/register.services')
const { addUser } = registerServices
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs');

const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const userData = new userModel({
            name: name,
            email: email,
            password: bcrypt.hashSync(password, 9),
        })

          await addUser(userData)
            .then(result => {
                res.status(201).json({
                'message': 'User succesfully created!',
                'data': result 
                }) 
            })
            .catch(err => {
                console.log('Error: ', err)
            })
               
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }

}

module.exports = {
    registerUser
}