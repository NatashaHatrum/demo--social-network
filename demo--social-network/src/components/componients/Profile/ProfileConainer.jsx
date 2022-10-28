import React, {} from 'react';
import ProfileContent from "./ProfileContent";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {compose} from "redux";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    componentDidMount() {

       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.match.params.userId != prevProps.match.params.userId ){
       this.refreshProfile()}
    }


    render() {
        return (
            <ProfileContent
                {...this.props}
                isOwner = {!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto ={this.props.savePhoto}

            />)
    }
}

let mapStateToProps = (state) => ({
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


