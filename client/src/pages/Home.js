import React, { Component } from "react";
import API from "../api/API";
import Navbar from "../components/Navbar";


class Home extends Component {
state = {
    search: "",
    books: []
}

    // componentDidMount() {
    //     this.logBooks();
    // }

    logBooks = () => {
        API.getBooks("harry+potter")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Hello</h1>
            </div>
        );
    }
}

export default Home;