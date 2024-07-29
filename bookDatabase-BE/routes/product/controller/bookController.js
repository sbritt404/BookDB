const book = require('../model/book')

module.exports = {
    getAllBooks: function (callback) {
        book.find({})
        .then(payload => {
            callback(null, payload)
        })
        .catch(error => {
            callback(error,null)
        })
    },

    //addBook
    //updateBook(ByID)?
    //deleteBook(ByID)?
}