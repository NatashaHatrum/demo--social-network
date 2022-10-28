import React, {} from 'react';
import MyPosts from "../Myposts";
import {addPostActionCreator} from "../../../../../Redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch (addPostActionCreator(newPostText))
        }}}




const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
