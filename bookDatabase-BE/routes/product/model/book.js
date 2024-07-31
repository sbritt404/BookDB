const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        author: {
            type: String
        },
        publishedYear: {
            type: Number,
        }
    }
)

module.exports = mongoose.model('Book', bookSchema)