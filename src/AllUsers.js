import React, { Component } from "react";
import FriendRow from "./FriendRow"

class AllUsers extends Component {
  render() {
		return (
			<div>
				{this.props.users.map( (user,i) => 
					<div>
						<FriendRow key={i} {...user}/> 
						{
							(this.props.following.indexOf(user)!== -1) ?
							<button 
								onClick={() => this.props.removeFollowUser(user)}
								style = {{display: 'inline-block', marginLeft:10, marginBottom:10}}>
								Unfollow
							</button> : 
							<button 
								onClick={() => this.props.addFollowUser(user)}
								style = {{display: 'inline-block', marginLeft:10, marginBottom:10}}>
								Follow    
							</button>
						}
					</div>)
					}
			</div>
		);
  }
}
export default AllUsers;