import React from "react";
import "./style.css";

function BookCard(props) {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{props.title}</h3>
                            <h4>{props.authors}</h4>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;