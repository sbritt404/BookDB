const express = require('express')
const router = express.Router()

const bookController = require('./product/controller/bookController')

router.get('/get-all-books', (req, res) => {
    bookController.getAllBooks((err, payload) => {
        if (err) {
            res.status(500).json({message: "Error", error: err})
        }else{
            res.json({message: 'Books found.', data: payload})
        }
    })
})

router.post('/create-book', (req, res) => {
    bookController.createBook(req.body, (err, payload) => {
        if(err) {
            res.status(500).json({message: "Error", error: err})
        }else{
            res.json({message: 'Book Created', data: payload})
        }
    })
})

router.put('/update-book/:id', (req, res) => {
    bookController.updateBookByID(req.params.id, req.body, (err, payload) => {
        if (err) {
            res.status(500).json({ message: "Error", error: err })
        } else {
            res.json({ message: 'Book Created.', data: payload })
        }
    })
})

router.delete('delete-book/:id', (req, res) => {
    bookController.updateBookByID(req.params.id, (err, payload) => {
        if (err) {
            res.status(500).json({ message: "Error", error: err})
        } else {
            res.json({ message: 'Book Deleted.', data: payload })
        }
    })
})

module.exports = router