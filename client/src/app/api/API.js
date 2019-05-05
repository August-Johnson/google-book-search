import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=AIzaSyAYdK_kJYpf9FQjT0kZ-9UCjr3UMN1kZJA");
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