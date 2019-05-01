import React, { Component } from "react";
import API from "../api/API";
import BookCard from "../components/Book";

class Saved extends Component {
    state = {
        saved: [{
            image: "https://via.placeholder.com/140x100",
            title: "Title",
            authors: "Somebody",
            description: "Something happens in this book."
        }]
    }

    render() {
        return (
            <div>

                {this.state.saved.length ? (
                    <div>
                        {this.state.saved.map((book) => (
                            <BookCard
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link} />
                        ))}
                    </div>
                ) : (
                        <h3>No Saved Books</h3>
                    )}

            </div>
        );
    }

}

export default Saved;