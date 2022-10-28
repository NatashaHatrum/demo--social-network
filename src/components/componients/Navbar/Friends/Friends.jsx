import React from "react";
import classes from './Friends.module.css'
import Name from './name'

const Friends = (props) => {
    let friendsElements = props.state.users.map(friend => <Name key={friend.name} user={friend.name}/>);
    return (
        <div>
            <div className={classes.item}>{friendsElements}</div>
        </div>
    )
}

export default Friends;


