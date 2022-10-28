import React, {} from 'react';
import classes from './../Dialogs.module.css';




const Message = (props) => {
    return <div>
    <div className={classes.dialogs}>{props.message}</div>

    </div>
}




export default Message;