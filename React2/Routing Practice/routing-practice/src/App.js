import React from "react";
import './App.css';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Home from './components/Home';
import Parameters from './components/Parameters';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:input/:color1?/:color2?">
            <Parameters />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
