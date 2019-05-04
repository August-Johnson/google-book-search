import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/Book";
import API from "../api/API";

class Saved extends Component {
    state = {
        saved: []
    }

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then((res) => {
                console.log(res.data);
                this.setState({ saved: res.data });
            })
            .catch((err) => console.log(err));
    }

    deleteSavedBook = (id) => {
        console.log(id);
        API.deleteBook(id)
            .then((res) => {
                console.log(res);
                this.getSavedBooks();
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.saved.length ? (
                    <Jumbotron className={"jumbotron"}>
                        {this.state.saved.map((book) => (
                            <BookCard
                                key={book.bookId}
                                id={book._id}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                onClick={this.deleteSavedBook}
                                buttonClassNames={"btn btn-danger card-button"}
                                buttonType={"Delete"}
                            />
                        ))}
                    </Jumbotron>
                ) : (
                        <Jumbotron className={"jumbotron text-center"}>
                            <h3>No Saved Books</h3>
                        </Jumbotron>
                    )}
            </div>
        );
    }

}

export default Saved;