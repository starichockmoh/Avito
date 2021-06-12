import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {ProfileType} from "../Types/Types";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import withAuthRedirect from "../../HOCs/withAuthRedirect";

type MapStateToPropsType = {
    Profile: ProfileType
}
type MapDispatchToPropsType = {}

type PropsType = MapDispatchToPropsType & MapStateToPropsType
class Profile extends React.Component<PropsType>{
    render() {
        return <div>
            <ProfileInfo Profile = {this.props.Profile}/>
        </div>;
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    Profile: state.Profile
})

const ProfileContainer: any = compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {}),
    withAuthRedirect
)(Profile)


export default ProfileContainer