
const addUser = async (userData) => {
    try {
         return await userData.save()
    } catch (err) {
        console.log('err: ', err)
    }
}
module.exports = {
    addUser
}