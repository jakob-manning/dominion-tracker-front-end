import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Players from "./players/containers/Players";
import Stats from "./stats/containers/Stats";
import Navigation from "./shared/Navigation/Navigation";
import Home from "./home/Home";


function App() {

  return (
      <BrowserRouter>
          <Navigation></Navigation>
        <Switch>
            <Route exact path={"/"}>
                <Home />
            </Route>
          <Route path={"/players"}>
              <Players/>
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
