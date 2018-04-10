import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";
//import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <h1>Simple SPA</h1>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>

      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
