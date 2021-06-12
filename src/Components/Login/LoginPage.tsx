import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import styles from "./LoginPage.module.css"
import {Login} from "../../Redux/Reducers/AuthReducer";
import { Redirect } from "react-router-dom";

type MapDispatchToPropsType = {
    Login: (name: string, password: string) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class LoginPage extends React.Component<PropsType>{
    render() {
        // if (this.props.isAuth){
        //     return <Redirect to={"/profile"}/>
        // }
        return <div >
            <div className = {styles.Welcome}>
                <h1 >WelCOME To Huito!!!</h1>
            </div>
            <div className={styles.Login}>
                <LoginForm Login={this.props.Login}/>
            </div>
        </div>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.Auth.isAuth
})

const LoginPageContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {Login})(LoginPage)


export default LoginPageContainer