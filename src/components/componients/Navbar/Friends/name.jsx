import React, {} from 'react';
import classes from './Friends.module.css'





const Name = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>

            </div>
        <div >{props.users}</div>

        </div>)
}




export default Name;