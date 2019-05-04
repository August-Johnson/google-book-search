import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h1>Google Books</h1>
            <Link to={"/"}><h2>Search</h2></Link>
            <Link to={"/saved"}><h2>Saved</h2></Link>
        </nav>
    );
}

export default Navbar;