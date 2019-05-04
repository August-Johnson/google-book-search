import axios from "axios";
const MY_KEY = process.env.API_KEY;

export default {
    getBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&download=epub&key=" + MY_KEY);
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