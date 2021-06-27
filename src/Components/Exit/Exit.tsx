import React from "react";
import {Button} from "antd";
import {authAPI} from "../../Api/Api";
import {useDispatch, useSelector} from "react-redux";
import {AuthActions} from "../../Redux/Reducers/AuthReducer";
import {AppStateType} from "../../Redux/Store";
import {Redirect} from "react-router-dom";


export const Exit: React.FC = () => {
    const dispatch = useDispatch()
    const ExitApp = () => {
        dispatch(AuthActions.AuthUser(false))
        authAPI.logout()
    }
    const isAuth = useSelector((state:AppStateType) => state.Auth.isAuth)
    if (!isAuth) return <Redirect to={"/login"}/>
    return <div>
        <br/>Are you sure to exit app?
        <br/><Button onClick={ExitApp}> Yes </Button>
    </div>
}