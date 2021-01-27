import {
    DominionPlayerFullName,
    DominionPlayerResultsList
} from "../types/DominionGame";

export const calculatePlayerPoints = (playerName: DominionPlayerFullName, players: DominionPlayerResultsList): number => {
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

export const calculatePlayerGames = (playerName: DominionPlayerFullName, players: DominionPlayerResultsList): number => {
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

export const calculatePlayerWins = (playerName: DominionPlayerFullName, gameList: object): number => {
    let playerWins = 0;

    for(const [gameNumber, game] of Object.entries(gameList)){
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
    console.log(playerWins);
    return playerWins
}