import React from 'react'
import {
    DominionPlayerFullName,
    DominionPlayerResultsList,
    DominionPlayerResultsSafe
} from "../../types/DominionGameTypes";


interface Props {
    playerNames: DominionPlayerFullName[],
    playerResultsList: DominionPlayerResultsList,
    gameList: object
}

const Stats: React.FC<Props> = (props) => {
    //highest scoring game
    const safePlayerResultsList = props.playerResultsList.filter( player => {
        return !(!player.score || !player.turns || !player.date);

    }) as DominionPlayerResultsSafe []
    const highestScoringPlays = safePlayerResultsList.sort((player1, player2 ) => player2.score - player1.score).slice(0,9)
    const lowestScoringPlays = safePlayerResultsList.sort((player1, player2 ) => player1.score - player2.score).slice(0,9)



    return (
        <div>
            <h1>Stats</h1>
            <h2>All-time Highest Scores</h2>
            {
                highestScoringPlays.map( player => (
                    <ul>
                        <li>{player.fullName}</li>
                        <li>{player.score}</li>
                    </ul>
                ) )
            }
            <h2>All-time Lowest Scores</h2>
            {
                lowestScoringPlays.map( player => (
                    <ul>
                        <li>{player.fullName}</li>
                        <li>{player.score}</li>
                    </ul>
                ) )
            }
        </div>
    )
}

export default Stats