import React from "react";
import LoginForm from "./LoginForm";
import styles from "./LoginPage.module.css"
import {Login} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";

const LoginPage = () => {
    const isAuth = useSelector((state:AppStateType) => state.Auth.isAuth)
    if (isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <div className={styles.Welcome}>
            <h1>WelCOME To Huito!!!</h1>
        </div>
        <div className={styles.Login}>
            <LoginForm/>
        </div>
    </div>
}


export default LoginPage