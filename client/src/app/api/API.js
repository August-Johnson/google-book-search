import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get("/api/books/search/" + query);
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