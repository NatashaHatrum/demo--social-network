import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = ({active, setActive}) =>{
    return (
        <div className={active ? 'classes.modal.active' : 'classes.modal'} onClick={() => setActive(false)}>
{<div className={classes.modal_content} onClick={e => e.stopPropagation()} ></div>}
           modal1
        </div>
    )
};

export default Modal;