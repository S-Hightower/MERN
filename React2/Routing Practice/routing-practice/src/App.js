import React from "react";
import './App.css';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Home = (props) => {
  return (
    <h1 style={{color: "red"}}>Home Component</h1>
  );
}

const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <p>
          <Link to="/">Home</Link>
          |
          <Link to="/about">About</Link>
        </p>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
