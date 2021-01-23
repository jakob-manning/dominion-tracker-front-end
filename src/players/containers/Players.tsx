import React, {useEffect, useState} from 'react'
import {DominionPlayer, DominionPlayerFullName} from "../../types/DominionGame";

interface Props {
    data: object
}

const Players: React.FC<Props> = (props) => {
    // const [players, setPlayers] = useState<DominionPlayer[]>([])
    // const [playerNames, setPlayerNames] = useState<DominionPlayerFullName[]>([])
    let players: DominionPlayer[] = []
    let playerNames: DominionPlayerFullName[] = []
    console.log(props.data);
    if(props.data){
        //set local players array
        for(const [gameNumber, game] of Object.entries(props.data)){
            for(const player of game){
                players = players.concat(player)
            }
        }
        //find all unique names
        let playerNameSet = new Set(players.map(player => player.fullName))
        //TODO: learn to love typescript enough to deal with the below
        // @ts-ignore
        playerNames = [...playerNameSet]
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

    // useEffect( (): void => {
    //     let playersArray: any[] = []
    //     console.log(props.data);
    //     if(props.data){
    //         //set local players array
    //         for(const [gameNumber, game] of Object.entries(props.data)){
    //             for(const player of game){
    //                 playersArray = playersArray.concat(player)
    //             }
    //         }
    //         setPlayers(playersArray)
    //         //find all unique names
    //         let playerNameSet = new Set(players.map(player => player.fullName))
    //         //TODO: learn to love typescript enough to deal with the below
    //         // @ts-ignore
    //         setPlayerNames([...playerNameSet])
    //     }
    // }, [props.data])

    return (
        <div>
            <h1>Player Profiles</h1>
            {playerNames.map( player => {
                console.log(player);
                return (
                    <div>
                        <h3>{player}</h3>
                        <p>Wins: {calculatePlayerWins(player)}</p>
                        <p>Points: {calculatePlayerPoints(player)}</p>
                        <p>Games: {calculatePlayerGames(player)}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Players