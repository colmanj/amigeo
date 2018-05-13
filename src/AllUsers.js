import React, { Component } from "react";

import FriendRow from "./FriendRow"


class AllUsers extends Component {
    

    render() {
        return (
            <div>
                {this.props.users.map(user => 
                    <div>
                        <FriendRow {...user}/> 
                        <button 
                            onClick={() => this.props.addFollowUser(user)}
                            style = {{display: 'inline-block', marginLeft:10, marginBottom:10}}>
                            Follow
                        </button>    
                    </div>)
                }
            </div>
        );
    }
}
 //
export default AllUsers;