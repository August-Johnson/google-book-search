import React from "react";

function Jumbotron(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Jumbotron;