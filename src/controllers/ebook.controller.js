


const addEbook = async (req, res, next) => {
    const { eTitle, eFile, eDescription, eAuthor, eDateCreate } = req.body

    try {
         await res.status(201).json({
             'message': 'Success',
             'data': 'Ebook Added into database'
         })
    } catch (e) {
        console.log(e.message)
    }

}

const getEbook = async (req, res, next) => {
    try {
        await res.status(200).json({
            'message': 'Success',
            'data': {
                'id': 90190190,
                'ebook_title': 'IPA Kelas 3',
                'ebook_file': 'www.google.com/ebook-kelas-3-ipa',
                'ebook_description': 'Buku untuk kelas 3 SMA',
                'ebook_author': 'Bang Joni dkk',
                'date_created': '01-09-2009'
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}

const deleteEbook = async (req, res, next) => {
    try {
        return 'Ebook has been deleted'
    } catch (e) {
        console.log(e.message)
    }
}

const updateEbook = async (req, res, next) => {
    try {
        return 'Ebook updated!'
    } catch (e) {
        console.log(e.message)
    }
}
module.exports = {
    addEbook,
    deleteEbook,
    updateEbook,
    getEbook
}