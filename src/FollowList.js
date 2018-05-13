import React, { Component } from "react";

import FriendRow from "./FriendRow"


class FollowList extends Component {
    render() {
        return (
            <div>
                {this.props.following.map(user => <FriendRow {...user}/>)}
            </div>
        );
    }
}
 //
export default FollowList;