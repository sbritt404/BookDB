const Book = require('../model/Book')

module.exports = {
    // getAllBooks: function (callback) {
    //     Book.find({})
    //     .then(payload => {
    //         callback(null, payload)
    //     })
    //     .catch(error => {
    //         callback(error,null)
    //     })
    // },

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
    }
    //updateBook(ByID)?
    //deleteBook(ByID)?
}