import React, {useState} from 'react';
import classes from './Profaleinfo.module.css';
import Preloader from "../../common/preolader/preloader";
import twitterIkons from "../../../../assets/images/image.png";
import ProfileStatusThisHooks from "./ProfileStatusWithHoocks";
import userPhoto from "../../../../assets/images/users.png";
import ProfileDataForm from "./ProfileDataForm";



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainePhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
   saveProfile(formData).then(
       ()=>{setEditMode(false)}
   )};

    return (
        <div>
            <div className={classes.descriptionBlok}>
                <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainePhotoSelected}/>}
                <ProfileStatusThisHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onSubmit}/>
                    :  <ProfileData goToEditMode ={()=>{
                                     setEditMode(true)}}
                                    profile={profile}
                                    isOwner ={isOwner}/>}
                {/*<div><span className={classes.ikons}><img src={twitterIkons}
                                                          className={classes.twitterIkons}/></span>{profile.contacts.twitter}
                </div>*/}

            </div>

        </div>)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div><b>FullName</b>: {profile.fullName}  </div>
        <div><b>About Me</b>: {profile.aboutMe}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'} </div>
        {profile.lookingForAJob &&
        <div><b>My professional skeels</b>: {profile.lookingForAJobDescription}</div>}
        <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }
        )}</div>

    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={classes.contackt}><b>{contactTitle}</b>: {contactValue} </div>
}

export default ProfileInfo;