import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import AllUsers from "./AllUsers";
import FollowList from "./FollowList";
//import './App.css';

let usersDB = require('./tempData/allUsersDB.json');
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        following:[]
    };
    this.addFollowUser = this.addFollowUser.bind(this);
    this.removeFollowUser = this.removeFollowUser.bind(this);
  }
  
  addFollowUser(user){
    this.setState(prevState => ({
      following: [...prevState.following, user]
    }));
  }
  removeFollowUser(user){
    this.setState(prevState => ({
      following: prevState.following.filter((_,i) => i !== prevState.following.indexOf(user))
    }));
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
        <AllUsers following={this.state.following} users={usersDB.users} addFollowUser={this.addFollowUser} removeFollowUser={this.removeFollowUser}/>
        <FollowList following = {this.state.following} />
      </div>
    );
  }
}

export default App;
