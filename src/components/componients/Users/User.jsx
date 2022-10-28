import React from 'react';
import style from "./users.module.css";
import userPhoto from "../../../assets/images/users.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (<div>
            <span>
                <div>
                    <NavLink to={'./../profileContent/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                    </NavLink>
                </div>

                  <div>
                      {user.followed
                          ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              unfollow(user.id)
                          }}> Unfollow</button>

                          : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              follow(user.id)
                          }}>Follow</button>}
                </div>

            </span>
        <span>
                    <span>
                        <div>{user.name}</div>
                         <div>{user.status}</div>
                    </span>
                    <div>
                         <div>{"user.location.country"}</div>
                         <div>{"user.location.city"}</div>
                    </div>

                </span>

    </div>)
}


export default User;