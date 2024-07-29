const express = require('express')
const router = express.Router()

const bookController = require('./controller/bookController')

router.get('/get-all-books', (req, res) => {
    bookController.getAllBooks((error, payload) => {
        if (error) {
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: 'Books found.', data: payload})
        }
    })
})


module.exports = router