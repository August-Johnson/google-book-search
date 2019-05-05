const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const googleController = require("../../controllers/googleController");

router.route("/search/:search")
    .get(googleController.getBooks)

router.route("/saved")
    // getting all saved books
    .get(booksController.findSavedBooks)
    // saving a new book
    .post(booksController.saveBook);

router.route("/saved/:id")
    // getting data on specific saved book
    .get(booksController.findBookById)
    // deleting book from the database (only saved books are populating the database)
    .delete(booksController.deleteBook);

module.exports = router;