import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/Validators/validators";
import {Textarea} from "../../common/FormsControls/formsControls";


const MyPosts = React.memo(props => {

    let postsElements = [...props.posts].reverse().map((post, index) => <Post key={index} message={post.message}
                                                               likesCount={post.likesCount}/>)

    let addNewPost = (values) => {

        props.addPost(values.newPostText)

    }
    return <div className={classes.postsBlock}>

        <AddPostFormRedus onSubmit={addNewPost}/>

        <div className={classes.posts}>
            {postsElements}
        </div>

    </div>
})


const maxLength10 = maxLengthCreator(10);


let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><Field component={Textarea} placeholder={'Post message'} name={'newPostText'}
                                validate={[required, maxLength10]}/></div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
        </form>)

}


let AddPostFormRedus = reduxForm({form: 'AddNewPostText'})(AddPostForm);


export default MyPosts;