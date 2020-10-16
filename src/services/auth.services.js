
const postAuth = (username, password) => {
    try {
        if((username == "admin") && (password == "admin")){
            return true
        }else{
            return false
        }
       
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    postAuth
}