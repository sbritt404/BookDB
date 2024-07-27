const express = require('express')

const logger = require('morgan')
const cors = require('cors')
const booksRouter = require('./routes/user/booksRouter')


const app = express()


app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/book', booksRouter)

module.exports = app