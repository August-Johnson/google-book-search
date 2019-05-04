import React from "react";
import "./style.css";

function BookCard(props) {
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src={props.image} className="card-img" alt={`${props.title} cover`} />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h3 className="card-title">{props.title}</h3>
                            <h4>{props.authors}</h4>
                            <p className="card-text">{props.description}</p>
                        </div>
                        <div className="card-footer">
                            <a href={props.link}><button>View</button></a>
                            <button onClick={props.onClick(props.key)}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard;