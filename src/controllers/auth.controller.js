const authService = require('../services/auth.services')
const { postAuth } = authService

const authUser = async (req, res, next) => {
    const { username, password } = req.body
    try {
        if (postAuth(username, password) == true) {
            await res.status(200).json({
                'message': 'Success',
                'data': {
                    'id': 90190190,
                    'username': username,
                    'token': 'ab353532b33tgkl4j0i0u043jon34o9hbnt43tb4bi'
                }
                
            })
        } else {
            res.status(401).json({
                'message': 'Unauthorized'
            })
        }
    
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error) 
        res.status(500).next(e)
    }
}

module.exports = {
    authUser
}