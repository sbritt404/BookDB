const express = require('express')
const logger = require('morgan')

const mongoose = require('mongoose')
const Book = require('./routes/product/model/Book')
const bookRouter = require('./routes/bookRouter')



const port = 3000

mongoose
    .connect("mongodb://localhost:27017/book-db")
    .then(() => {
        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
            console.log('MongoDB connected.')
        })
    })
    .catch((error) => {
        console.log(error)
    })

const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use('/api/books', bookRouter)

