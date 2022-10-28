import React, {useEffect, useState} from 'react';
import classes from './Profaleinfo.module.css';

const ProfileStatusThisHooks = (props) => {

let [editMode, setEditMode] =  useState(false); //useState - таблица. В которой 1 элемент - значение, 2 - функция
let [status, setStatus] =  useState(props.status); //useState - таблица. В которой 1 элемент - значение, 2 - функция

 useEffect  (() =>{                         //передает функции, которые выполнятся, когда компонента отрисуется
     setStatus(props.status);
 }, [props.status])

    const activateEditMode = () =>{
        setEditMode (true);
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status);
    }
   const onStatusChange =(e) =>{
       setStatus(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status</b>: <span onDoubleClick={activateEditMode} > {props.status || 'No ststus'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onBlur={deactivateEditMode}
                       value={status}
                       autoFocus={true}/>
            </div>
            }
            <div>

            </div>
        </div>
    )

}


export default ProfileStatusThisHooks;