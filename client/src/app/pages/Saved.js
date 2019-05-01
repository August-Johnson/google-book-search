import React, { Component } from "react";
import API from "../api/API";
import BookCard from "../components/Book";

class Saved extends Component {
    state = {
        saved: []
    }

    render() {
        return (
            <div>
                {
                    this.state.saved.map((book) =>
                        <BookCard image={book.image} title={book.title} authors={book.authors} description={books.description} link={book.link} />
                    )
                }
            </div>
        );
    }

}

export default Saved;