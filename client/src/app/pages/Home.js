import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm/SearchForm";
import BookCard from "../components/Book";
import API from "../api/API";

class Home extends Component {
    state = {
        search: "",
        results: []
    }

    componentDidMount() {
        this.checkForDuplicates();
        console.log(this.state.results);
    }

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    searchForBooks = (query) => {
        API.getBooks(query)
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
                this.setState({ results: booksArray, search: "" });
                this.checkForDuplicates();
            })
            .catch((err) => console.log(err));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.search) {
            this.searchForBooks(this.state.search);
        }
        else {
            alert("Search field is empty!");
        }
    }

    saveBook = (id) => {
        let bookData = this.state.results.filter((book) => book.id === id);
        bookData = bookData[0];
        API.saveNewBook({
            authors: bookData.authors,
            bookId: bookData.id,
            description: bookData.description,
            image: bookData.image,
            link: bookData.link,
            title: bookData.title
        })
            .then((res) => {
                const updatedResults = this.state.results.filter((book) => book.id !== res.data.bookId)
                this.setState({ results: updatedResults })
            })
            .catch((err) => console.log(err));
    }

    checkForDuplicates = () => {
        API.getSavedBooks()
            .then((res) => {
                const duplicateBookIds = res.data.map((book) => book.bookId);
                console.log(duplicateBookIds);
                this.setState({ results: this.state.results.filter((book) => duplicateBookIds.indexOf(book.id) === -1) })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
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
                                id={book.id}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                onClick={this.saveBook}
                                buttonClassNames={"btn btn-success card-button"}
                                buttonType={"Save"}
                            />
                        )}
                    </Jumbotron>
                ) : (
                        <Jumbotron className={"jumbotron text-center"}>
                            <h3>No Books Searched</h3>
                        </Jumbotron>
                    )}
            </div>
        );
    }
}

export default Home;