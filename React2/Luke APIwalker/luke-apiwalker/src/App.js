import React from 'react';
import './App.css';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

//Import Components
import Home from './components/Home';
import Planets from './components/Planets';
import People from './components/People';
import Species from './components/Species';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/planets/:id">
            <Home/>
            <Planets/>
          </Route>

          <Route path="/people/:id">
            <Home/>
            <People/>
          </Route>

          <Route path="/species/:id">
            <Home/>
            <Species/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
