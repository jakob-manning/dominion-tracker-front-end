import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Players from "./players/containers/Players";
import Stats from "./stats/containers/Stats";
import Navigation from "./shared/Navigation/Navigation";
import Home from "./home/Home";
import axios from "axios";

function App() {
    const [serverData, setServerData] = useState< undefined | unknown>( undefined)

    useEffect( () => {
        axios.get("https://dominion-json-bin-default-rtdb.firebaseio.com/scores.json")
            .then( response => {
                setServerData(response.data)
                console.log(response)
            })
            .catch(error => console.log(error))
    }, [])


    return (
      <BrowserRouter>
          <Navigation></Navigation>
        <Switch>
            <Route exact path={"/"}>
                <Home />
            </Route>
          <Route path={"/players"}>
              <Players data={serverData as object} />
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
