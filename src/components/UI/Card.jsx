import React from "react";
import './Card.css';

//Read it:
// we had some components which had same styles : shadows and wrapped corners...
// so we made this card to avoid code duplication in css and html attributes

const Card = (props) => {

    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;