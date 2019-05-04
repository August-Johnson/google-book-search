import axios from "axios";
const dotenv = require("dotenv");
// const API_KEY = process.env.API_KEY;

export default {
    getBooks: function (query) {
        console.log(process.env);
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&download=epub&key=" + process.env.API_KEY);
    },
    getSavedBooks: function () {
        return axios.get("/api/books/saved");
    },
    saveNewBook: function (bookData) {
        return axios.post("/api/books/saved", bookData);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/saved/" + id);
    }
}