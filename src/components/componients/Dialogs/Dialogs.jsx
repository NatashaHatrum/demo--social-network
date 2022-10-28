import React, {} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/formsControls";
import {maxLengthCreator, required} from "../../../utils/Validators/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messageElements = state.messages.map((element, index) => <Message key={index} message={element.message}/>)
    let dialogsElements = state.dialogs.map((element, index) => <DialogItem key={index} name={element.name}
                                                                            id={element.id}/>)


    let addNewMessage = (values) => {

        props.sendMessage(values.newMessageBody)

    }
    if (!props.isAuth) return <Navigate to={'/login'}/>;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.message}>
                {messageElements}
            </div>
            <div className={classes.message}></div>
            <AddMessageFormRedus onSubmit = {addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLength50 ]} name='newMessageBody' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Add message</button>
        </div>
    </form>)
}

const AddMessageFormRedus = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);


export default Dialogs;