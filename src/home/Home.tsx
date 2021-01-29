import React from 'react'
import classes from "./Home.module.css";
import {DominionPlayerFullName, DominionPlayerResultsList, DominionPlayerStats} from "../types/DominionGameTypes";
import { createPlayerStatsTable } from "../shared/util";

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
    let playerStatsTable: DominionPlayerStats[] = []
    let thisMonthsPlayerStatsTable: DominionPlayerStats [] =[]

    if(playerResultsList && playerResultsList && gameList){
        //create an overall leaderboard
        playerStatsTable = createPlayerStatsTable(playerNames, playerResultsList, gameList)
        const today = new Date()
        const firstOfTheMonth = new Date(today.getFullYear(), today.getMonth(), 1);

        //create this month's leaderboard
        const thisMonthsResults = playerResultsList.filter(player => {
            if(!player.date) return false
            return player.date >= firstOfTheMonth.toISOString()
        })
        const thisMonthsPlayerNames = thisMonthsResults.map( player => player.fullName)

        console.log(thisMonthsResults)

        thisMonthsPlayerStatsTable = createPlayerStatsTable(thisMonthsPlayerNames, thisMonthsResults, gameList, firstOfTheMonth)
        console.log(thisMonthsPlayerStatsTable);
    }


    return (
        <div className={classes.Home}>
            <h1>This Month's Leaderboard</h1>
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
                {thisMonthsPlayerStatsTable[0] && thisMonthsPlayerStatsTable.map( playerDetails => {
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


            <h1>All-Time Leaderboard</h1>
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