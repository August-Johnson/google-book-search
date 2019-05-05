const axios = require("axios");

module.exports = {
    getBooks: function (req, res) {
        console.log(req.params.search);
        console.log(process.env);
        console.log(process.env.MY_KEY);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search + "&download=epub&key=" + process.env.MY_KEY)
            .then((searchResults) => res.json(searchResults))
            .catch((err) => res.json(err));
    }
}