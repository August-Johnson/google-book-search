const db = require("../models");

module.exports = {
    findSavedBooks: function (req, res) {
        db.Book.find()
            .then((savedBooks) => res.json(savedBooks))
            .catch((err) => res.json(err));
    },

    saveBook: function (req, res) {
        db.Book.create(req.body)
            .then((bookData) => res.json(bookData))
            .catch((err) => res.json(err));
    },

    findBookById: function (req, res) {
        db.Book.findById(req.params.id)
            .then((bookData) => res.json(bookData))
            .catch((err) => res.json(err));
    },

    deleteBook: function (req, res) {
        db.Book.findOneAndDelete({ _id: req.params.id })
            .then((deletedBook) => res.json(deletedBook))
            .catch((err) => res.json(err));
    }
};