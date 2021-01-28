import React from 'react'
import classes from "./Home.module.css";
import { DominionPlayerFullName, DominionPlayerResultsList} from "../types/DominionGame";
import {
    calculatePlayerGames,
    calculatePlayerPoints,
    calculatePlayerWins,
    calculateStandardDeviation
} from "../shared/util";

interface Props {
    playerNames: DominionPlayerFullName[],
    playerResultsList: DominionPlayerResultsList,
    gameList: object
}

const Home: React.FC<Props> = ({playerNames, playerResultsList, gameList})=> {
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    // const toggleBackground = () => {
    //     setIsDrawerOpen(!isDrawerOpen)
    // }

    //create a table with all the most interesting stats
    //sort the table by "points"
    const playerStatsTable = []

    if(playerNames && playerResultsList){
        for(const player of playerNames){
            const name = player
            const wins = calculatePlayerWins(player, gameList)
            const games = calculatePlayerGames(player, playerResultsList)
            const points = calculatePlayerPoints(player, playerResultsList)
            const averageWins = (wins/games).toFixed(2)
            const averagePoints = (points/games).toFixed(2)
            const standardDeviation = calculateStandardDeviation(player, playerResultsList).toFixed(4)
            const DominionWorldScore = (wins - (games-wins)*0.914159) //this feels sufficiently arbitrary

            const playerDetails = {
                name,
                wins,
                games,
                points,
                averageWins,
                averagePoints,
                standardDeviation,
                DominionWorldScore,
            }
            playerStatsTable.push(playerDetails)
        }

        playerStatsTable.sort( (player1, player2 ) => player2.DominionWorldScore - player1.DominionWorldScore)
    }

    //create a different leaderboard for the past month (sort by date and remove any values that don't have the same month)



    return (
        <div className={classes.Home}>
            <h1>LeaderBoard</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Player
                        </th>
                        <th>
                            Games
                        </th>
                        <th>
                            Winning Average
                        </th>
                        <th>
                            Average Points / Game
                        </th>
                        <th>
                            Standard Deviation
                        </th>
                        <th>
                            Total Points
                        </th>
                        <th>
                            Total Wins
                        </th>
                        <th>
                            Dominion World Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {playerStatsTable[0] && playerStatsTable.map( playerDetails => {
                        return(
                            <tr key={playerDetails.name}>
                                <td>{playerDetails.name}</td>
                                <td>{playerDetails.games}</td>
                                <td>{playerDetails.averageWins}</td>
                                <td>{playerDetails.averagePoints}</td>
                                <td>{playerDetails.standardDeviation}</td>
                                <td>{playerDetails.points}</td>
                                <td>{playerDetails.wins}</td>
                                <td>{playerDetails.DominionWorldScore.toFixed(3)}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {/*<h2>Recent Games</h2>*/}
            {/*<h3>High Scores</h3>*/}

            {/*{isDrawerOpen && <Backdrop onClick={toggleBackground}/>}*/}
            {/*<button onClick={toggleBackground}>Sign In</button>*/}
        </div>
    )
}

export default Home