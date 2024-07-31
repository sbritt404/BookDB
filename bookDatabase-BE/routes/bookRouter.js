const express = require('express')
const router = express.Router()

const bookController = require('./product/controller/bookController')

// router.get('/get-all-books', (req, res) => {
//     bookController.getAllBooks((error, payload) => {
//         if (error) {
//             res.status(500).json({message: "Error", error: error})
//         }else{
//             res.json({message: 'Books found.', data: payload})
//         }
//     })
// })

router.post('/create-book', (req, res) => {
    bookController.createBook(req.body, (error, payload) => {
        if(error) {
            res.status(500).json({message: "Error", error: error})
        }else{
            res.json({message: 'Book Created', data: payload})
        }
    })
})

router.put('/update-book/:id', (req, res) => {

})

router.delete('delete-book/:id', (req, res) => {

})

module.exports = router