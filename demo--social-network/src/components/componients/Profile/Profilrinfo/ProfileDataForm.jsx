import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/formsControls";
import {reduxForm} from "redux-form";
import classes from './Profaleinfo.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div> <button >save</button></div>
        {error &&
        <div className={classes.formError}>
            {error}
        </div>}
        <div>
            <b>FullName</b>: {createField('Full name', 'fullName', [], Input)}
        </div>

        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div><b>My professional skills</b>:  {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About Me</b>:{createField('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contackt}>
                <b>{key}:</b>{createField(key, 'contacts.'+ key, [], Input)}
            </div>
        })}</div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'}) (ProfileDataForm);
export default ProfileDataFormReduxForm;