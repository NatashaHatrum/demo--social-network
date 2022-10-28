import React, {} from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import photoLogo from '../../../assets/images/network.png'

const Header = (props) => {
    console.log(props)

    return (<header className={classes.header}>
            <img
                alt='logo'
                src={photoLogo}
            />
            <div className={classes.loginBlock}>

                {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}


export default Header;