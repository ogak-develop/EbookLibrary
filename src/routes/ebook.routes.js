const express = require('express')
const router = express.Router()
const ebookController = require('../controllers/ebook.controller')

router.post('/add-ebook', ebookController.addEbook)
router.get('/get-ebook', ebookController.getEbook)
router.delete('/delete-ebook', ebookController.deleteEbook)
router.put('/update-ebook', ebookController.updateEbook)
module.exports = router;