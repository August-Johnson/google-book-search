import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm/SearchForm";
import BookCard from "../components/Book";
import API from "../api/API";

class Home extends Component {
    state = {
        search: "",
        results: []
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.search) {
            API.getBooks(this.state.search)
                .then((res) => {
                    const booksArray = [];
                    res.data.items.forEach((bookItem) => (
                        booksArray.push(
                            {
                                id: bookItem.id,
                                image: bookItem.volumeInfo.imageLinks.thumbnail,
                                title: bookItem.volumeInfo.title,
                                authors: bookItem.volumeInfo.authors,
                                description: bookItem.volumeInfo.description,
                                link: bookItem.volumeInfo.infoLink
                            })
                    ))
                    this.setState({ results: booksArray });
                })
                .catch((err) => console.log(err));
        }
        else {
            alert("Search field is empty!");
        }
    }

    saveBook = (id) => {
        let bookData = this.state.results.filter((book) => book.id === id);
        API.saveNewBook(bookData)
            .then((res) => {
                this.setState({ results: this.state.results.filter((book) => book.id !== bookData.id) })
            })
            .catch((err) => console.log(err));
    }


    render() {
        return (
            <Container>
                <Jumbotron className={"jumbotron text-center"} >
                    <h1>(React) Google Books Search</h1>
                    <h4>Search for and Save Books of Interest</h4>
                </Jumbotron>

                <Jumbotron className={"jumbotron text-center"}>
                    <SearchForm
                        name="search"
                        value={this.state.search}
                        onChange={this.handleOnChange}
                        onSubmit={this.handleSubmit}
                    />
                </Jumbotron>


                {this.state.results.length ? (
                    <Jumbotron className={"jumbotron"}>
                        {this.state.results.map((book) =>
                            <BookCard
                                key={book.id}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                onClick={this.saveBook}
                            />
                        )}
                    </Jumbotron>
                ) : (
                        <Jumbotron className={"jumbotron text-center"}>
                            <h3>No Books Searched</h3>
                        </Jumbotron>
                    )}

                {/* <Link to={"./saved"}>
                    <button>See your saved books</button>
                </Link> */}
            </Container >
        );
    }
}

export default Home;