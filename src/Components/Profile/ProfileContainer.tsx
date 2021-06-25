import React, {useEffect} from "react";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import withAuthRedirect from "../../HOCs/withAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {getProfile} from "../../Redux/Reducers/ProfileReducer";


const ProfilePage = () =>  {
    const dispatch = useDispatch()
    const Profile = useSelector((state: AppStateType) => state.Profile.ProfileInfo)
    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])
    return <div>
        <ProfileInfo Profile={Profile}/>
    </div>;
}


export default ProfilePage