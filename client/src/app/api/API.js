import axios from "axios";
const MY_KEY = "";

export default {
    getBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&download=epub&key=" + MY_KEY);
    }
}