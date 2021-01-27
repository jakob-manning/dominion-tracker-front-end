import React from 'react'
// import Backdrop from "../shared/UI/Backdrop/Backdrop";
import classes from "./Home.module.css";
import { DominionPlayerFullName, DominionPlayerResultsList} from "../types/DominionGame";
import {calculatePlayerGames, calculatePlayerPoints, calculatePlayerWins} from "../shared/util";

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



    const leaderBoard = []
    if(playerNames){
        for(const player of playerNames){
            leaderBoard.push(
                <tr key={player}>
                    <td>
                        {player}
                    </td>
                    <td>
                        <i>{calculatePlayerGames(player, playerResultsList)}</i>
                    </td>
                    <td>
                        <i>{calculatePlayerPoints(player, playerResultsList)}</i>
                    </td>
                    <td>
                        <i>{calculatePlayerWins(player, gameList)}</i>
                    </td>
                </tr>
            )
        }
    }




    return (
        <div className={classes.Home}>
            <h1>LeaderBoard</h1>
            <table>
                <tr>
                    <td>
                        Player
                    </td>
                    <td>
                        Games
                    </td>
                    <td>
                        Score
                    </td>
                    <td>
                        Wins
                    </td>
                </tr>
                {leaderBoard}
            </table>

            {/*<h2>Recent Games</h2>*/}
            {/*<h3>High Scores</h3>*/}

            {/*{isDrawerOpen && <Backdrop onClick={toggleBackground}/>}*/}
            {/*<button onClick={toggleBackground}>Sign In</button>*/}
        </div>
    )
}

export default Home