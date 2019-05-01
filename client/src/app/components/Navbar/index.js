import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav>
            <h1>Google Books</h1>
            <a href="/"><h2>Search</h2></a>
            <a href="/saved"><h2>Saved</h2></a>
        </nav>
    );
}

export default Navbar;