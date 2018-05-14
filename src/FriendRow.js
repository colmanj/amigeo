import React, { Component}  from 'react';

class FriendRow extends Component {
    render(){
        return(
            <div>
                <img width="75" height="75" src= {this.props.profileImage}/>
                <div style = {{display: 'inline-block', marginLeft:10}}>
                    <div style = {{fontSize:'18px', fontWeight: 'bold'}}>
                        @{this.props.username}
                    </div>
                    <div>
                        {this.props.firstName}&nbsp;{this.props.lastName}
                    </div>
                </div>
            </div>
        );
    }
}
export default FriendRow;
