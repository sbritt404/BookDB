const Book = require('../model/Book')

module.exports = {
    getAllBooks: function (callback) {
        Book.find({})
        .then(payload => {
            callback(null, payload)
        })
        .catch(error => {
            callback(error,null)
        })
    },

    createBook: function (body, callback) {
        const {
            title,
            author,
            publishedYear
        } = body
        const savedBook = new Book({
            title,
            author,
            publishedYear
        })
        savedBook.save()
        .then((payload) => {
            callback(null, payload)
        })
        .catch(error => {
            callback(error, null)
        })
    },
    //updateBook(ByID)?
    updateBookByID: function (id, body, callback) {
        Book.findByIdAndUpdate(id, body, { new: true })
            .then(updatedPayload => {
                callback(null, updatedPayload)
            })
            .catch(error => {
                callback(error, null)
            })
    },
    //deleteBook(ByID)?
    deleteBookByID: function (id, callback) {
        Book.findByIdAndDelete(id)
            .then(deletedBook => {
                callback(null, deletedBook)
            })
            .catch(error => {
                callback(error, null)
            })
    }
}
