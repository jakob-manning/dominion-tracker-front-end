import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Players from "./players/containers/Players";
import Stats from "./stats/containers/Stats";
import Navigation from "./shared/Navigation/Navigation";
import axios from "axios";
import {DominionPlayerResults, DominionPlayerFullName, DominionPlayerResultsList} from "./types/DominionGameTypes";
import Home from "./home/Home";

function App() {
    const [games, setGames] = useState< object>({})
    const [playerResults, setPlayerResults] = useState< DominionPlayerResultsList>( [])
    const [playerNames, setPlayerNames] = useState< DominionPlayerFullName[]>( [])


    useEffect( () => {
        axios.get("https://dominion-json-bin-default-rtdb.firebaseio.com/scores.json")
            .then( response => {
                setGames(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    //extract player data
    useEffect( () => {
        let tempPlayers: DominionPlayerResults[] = []
        //set local players array
        for(const game of Object.values(games)){
            for(const player of game){
                tempPlayers = tempPlayers.concat(player)
            }
        }
        setPlayerResults(tempPlayers)
    }, [games])

    //extract player names
    useEffect( () => {
        let playerNameSet = new Set(playerResults.map(player => player.fullName))
        //TODO: learn to love typescript enough to deal with the below
        // @ts-ignore
        setPlayerNames([...playerNameSet] )
    },[playerResults])


    return (
      <BrowserRouter>
          <Navigation />
        <Switch>
            <Route exact path={"/"}>
                <Home playerNames={playerNames} playerResultsList={playerResults} gameList={games} />
            </Route>
          <Route path={"/players"}>
              <Players data={games as object} />
          </Route>
          <Route path={"/stats"}>
              <Stats/>
          </Route>
            <Route path={"/"}>
                <div>Error 404 :)</div>
            </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
