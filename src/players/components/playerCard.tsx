import React from 'react'
import classes from "./playerCard.module.css";

const PlayerCard: React.FC = (props) => {

    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default PlayerCard