import React, { Component } from "react";

import FriendRow from "./FriendRow"


class FollowList extends Component {
    render() {
        return (
            <div>
                <h1>You are now following: </h1>
                {this.props.following.map( (user,i) => <FriendRow key={i} {...user}/>)}
            </div>
        );
    }
}
 //
export default FollowList;