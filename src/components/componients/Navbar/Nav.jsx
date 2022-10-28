import React, {} from 'react';
import classes from "./Nav.module.css"
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";


const NavBar = (props) =>{
    return <nav className={classes.nav}>

        <div >< NavLink to='/profileContent' className = { navData => navData.isActive ? classes.active : classes.item } >Profile </NavLink> </div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>Messages </NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.item }>News </NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/music' className = { navData => navData.isActive ? classes.active : classes.item }>Musik </NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item }>Users </NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/settings' className = { navData => navData.isActive ? classes.active : classes.item }>Settings </NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/calendar' className = { navData => navData.isActive ? classes.active : classes.item }>Calendar </NavLink></div>

        <div className={classes.friends}>

        <div className={`${classes.friends} ${classes.active}`}><NavLink to='/friends' className = { navData => navData.isActive ? classes.active : classes.friends }>Friends </NavLink></div>
      {/*  <Friends state ={props.state}/>*/}

        </div>
    </nav>
}

export default NavBar;

