import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/Store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType): { isAuth: boolean } => ({
    isAuth: state.Auth.isAuth
})

const withAuthRedirect = (Component: any) => {
    class ComponentWithAuth extends React.Component<{ isAuth: boolean }> {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }

    return connect<{ isAuth: boolean }, {}, {}, AppStateType>(mapStateToProps, {})(ComponentWithAuth)
}

export default withAuthRedirect