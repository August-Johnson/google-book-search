import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
        <div className="search-container">
            <h2 className="search-header">Book Search</h2>
            <form onSubmit={props.onSubmit}>
                <label><h3>Book</h3></label><br />
                <input type="text" name={props.name} value={props.value} onChange={props.onChange}></input><br />
                <button type="submit" className="btn btn-primary form-button">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;