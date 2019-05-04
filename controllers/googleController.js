const axios = require("axios");

module.exports = {
    getBooks: function (req, res) {
        console.log(process.env);
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.search + "&download=epub&key=" + JSON.stringify(process.env.REACT_APP_API_KEY))
            .then((searchResults) => res.json(searchResults))
            .catch((err) => res.json(err));
    }
}