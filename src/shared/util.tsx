import {
    DominionPlayerFullName,
    DominionPlayerResultsList
} from "../types/DominionGameTypes";
import { std as standardDeviation } from "mathjs";

export const calculatePlayerPoints = (playerName: DominionPlayerFullName, players: DominionPlayerResultsList): number => {
    let playerPoints = 0;

    for(const player of players){
        if(player.fullName === playerName) {
            if(player.score){
                playerPoints += player.score
            }
        }
    }
    return playerPoints
}

export const calculatePlayerGames = (playerName: DominionPlayerFullName, players: DominionPlayerResultsList): number => {
    let playerGames = 0;

    for(const player of players){
        if(player.fullName === playerName) {
            if(player.score){
                playerGames += 1
            }
        }
    }
    return playerGames
}

//calculates the player wins after the start date
export const calculatePlayerWins = (playerName: DominionPlayerFullName, gameList: object, startDate ?: Date): number => {
    let playerWins = 0;

    for(const game of Object.values(gameList)){
        let winningScore = 0
        //look up the winning score
        for(const player of game){
            if(player.score > winningScore) winningScore = player.score
        }
        //see if our player got the winning score
        for(const player of game){
            if(player.fullName === playerName && player.score === winningScore) {
                if(!startDate){
                    playerWins ++
                }
                else if (player.date >= startDate?.toISOString()){
                    playerWins ++
                }
            }

        }
    }
    return playerWins
}

export const calculateStandardDeviation = (playerName: DominionPlayerFullName, players: DominionPlayerResultsList): number => {
    let playerPointsArray: number[] = []

    for(const player of players){
        if(player.fullName === playerName) {
            if(player.score){
                playerPointsArray = playerPointsArray.concat(player.score)
            }
        }
    }
    if(playerPointsArray.length > 0) return standardDeviation(playerPointsArray)
    return 0
}

//create player stats table
export const createPlayerStatsTable = (playerNames: DominionPlayerFullName[], playerResultsList: DominionPlayerResultsList, gameList: object, startDate ?: Date) => {
    const playerStatsTable = []
    for(const player of playerNames){
        const name = player
        const wins = calculatePlayerWins(player, gameList, startDate)
        const games = calculatePlayerGames(player, playerResultsList)
        const points = calculatePlayerPoints(player, playerResultsList)
        const averageWins = (wins/games).toFixed(2)
        const averagePoints = (points/games).toFixed(2)
        const standardDeviation = calculateStandardDeviation(player, playerResultsList).toFixed(4)
        const DominionWorldScore = (wins - (games-wins)*0.914159) //this feels wonderfully arbitrary ... but we could still make it weirder

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

    return playerStatsTable
}