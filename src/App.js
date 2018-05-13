import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import AllUsers from "./AllUsers";
import FollowList from "./FollowList";
//import './App.css';

let usersDB = require('./tempData/allUsersDB.json');
let following = { "users": []}
class App extends Component {
  
  addFollowUser(user){
    following.users.push(user);
    console.log(following);
  }

  render() {
    return (
      <div>
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
        <AllUsers users={usersDB.users} addFollowUser={this.addFollowUser}/>
        <FollowList following = {following.users} />
      </div>
    );
  }
}

export default App;
