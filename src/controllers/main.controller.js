
const title = async (req, res) => {
    try {
        await res.send('Welcome to Ebook Library API')
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    title
}