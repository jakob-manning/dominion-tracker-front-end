import React from 'react'
import classes from "./playerCard.module.css";

const playerCard: React.FC = (props) => {

    return (
        <div className={classes.card}>
            props.children
        </div>
    )
}

export default playerCard