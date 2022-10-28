import React, {} from 'react';
import ProfileInfo from './Profilrinfo/ProfileInfo';
import MyPostsContainer from "./My posts/Post/MypostsContainer";


const ProfileContent = (props) => {
    return <div>
        <ProfileInfo savePhoto={props.savePhoto}
                     isOwner = {props.isOwner}
                     profile={props.profile}
                     status = {props.status}
                     saveProfile = {props.saveProfile}
                     updateStatus ={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default ProfileContent;