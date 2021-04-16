import React from 'react'
import {DominionPlayerResults, DominionPlayerFullName} from "../../types/DominionGameTypes";
import PlayerCard from "../components/playerCard";
import classes from "./Players.module.css";

interface Props {
    data: object
}

const convertSecondsToNiceString = (seconds: number) => {
    var days = Math.floor(seconds / (3600*24))
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor(seconds / 60) % 60
    seconds = Math.round(seconds % 60)

    let str = days ? days + "d " : "";
    str += hours ? hours + "hr " : "";
    str += minutes ? minutes + "m " : "";
    str += seconds && !(days || hours) ? seconds + "s" : ""; // if there are days or hours we dont need to show seconds
    return str;
}

const Players: React.FC<Props> = (props) => {
    let players: DominionPlayerResults[] = []
    let playerNames: DominionPlayerFullName[] = []
    if(props.data){
        //set local players array
        for(const game of Object.values(props.data)){
            for(const player of game){
                players = players.concat(player)
            }
        }
        //find all unique names
        let playerNameSet = new Set(players.map(player => player.fullName))
        playerNames = Array.from(playerNameSet);
    }


    const calculatePlayerPoints = (playerName: DominionPlayerFullName): number => {
        let playerPoints = 0;

        for(const player of players){
            if(player.fullName === playerName) {
                if(player.score){
                    playerPoints += player.score
                }
            }
        }
        console.log(playerPoints);
        return playerPoints
    }

    const calculatePlayerGames = (playerName: DominionPlayerFullName): number => {
        let playerGames = 0;

        for(const player of players){
            if(player.fullName === playerName) {
                if(player.score){
                    playerGames += 1
                }
            }
        }
        console.log(playerGames);
        return playerGames
    }

    const calculatePlayerWins = (playerName: DominionPlayerFullName): number => {
        let playerWins = 0;

        if(props.data){
            for(const [gameNumber, game] of Object.entries(props.data)){
                console.log(gameNumber)
                let winningScore = 0
                //look up the winning score
                for(const player of game){
                    if(player.score > winningScore) winningScore = player.score
                }
                //see if our player got the winning score
                for(const player of game){
                    if(player.fullName === playerName && player.score === winningScore) playerWins ++
                }
            }
        }
        console.log(playerWins);
        return playerWins
    }

    const calculatePlayerPlayTimeInMs = (playerName: DominionPlayerFullName): number => {
        let playerPlayTimeInMs = 0;

        for(const player of players){
            if(player.fullName === playerName) {
                if(player.gameDuration && player.gameDuration < (3*60*60*1000)){ // don't include anything over 3 hours, the game duration collection isn't perfect
                    playerPlayTimeInMs += player.gameDuration;
                }
            }
        }

        console.log(playerPlayTimeInMs);
        return playerPlayTimeInMs;
    }

    return (
        <div className={classes.Players}>
            <h1>Player Profiles</h1>
            <div className={classes.cardContainer}>
                {playerNames.map( player => {
                    const playerPlayerTimeInSeconds = calculatePlayerPlayTimeInMs(player) / 1000;
                    const noOfGames = calculatePlayerGames(player);
                    return (
                            <PlayerCard>
                                <h3>{player}</h3>
                                <p>Wins: {calculatePlayerWins(player)}</p>
                                <p>Points: {calculatePlayerPoints(player)}</p>
                                <p>Games: {noOfGames}</p>
                                {playerPlayerTimeInSeconds !== 0 && <p>Play Time: {convertSecondsToNiceString(playerPlayerTimeInSeconds)}</p>}
                                {playerPlayerTimeInSeconds !== 0 && <p>Avg Game Time: {convertSecondsToNiceString((playerPlayerTimeInSeconds) / noOfGames)}</p>}
                            </PlayerCard>
                    )
                })}
            </div>
        </div>
    )
}

export default Players