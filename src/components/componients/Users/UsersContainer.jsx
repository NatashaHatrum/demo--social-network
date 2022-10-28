import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers, setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../../Redux/users-redusers";
import Users from "./Users";
import Preloader from "../common/preolader/preloader";
import {withAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getTotalUsersCount,
    getUsers
} from "../../../Redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
const {getUsers, pageSize} = this.props;
        getUsers(pageNumber, pageSize);
    };

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}

            /></>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),    //чтобы получить количество пользователей на странице в Users идем
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state) ,
        followingInProgress: getFollowingInProgress (state)
    }
}

export default compose(
    (connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers})
    /* withAuthRedirect*/
)(UsersContainer));
