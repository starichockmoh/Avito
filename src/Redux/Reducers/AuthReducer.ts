import {AppStateType} from "../Store";
import {ThunkAction} from "redux-thunk";
import {authAPI} from "../../Api/Api";
import { ActionsType } from "../../Components/Types/Types";

let InitialState = {
    isAuth: true
}

type InitialStateType = typeof InitialState
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AuthActionsType>
type AuthActionsType = ActionsType<typeof AuthActions>

const AuthReducer = (state = InitialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH_USER":
            return {
                ...state,
                isAuth: !state.isAuth
            }
        default:
            return state

    }
}

const AuthActions = {
    AuthUser: () => ({type: 'AUTH_USER'} as const)
}

export const Login = (name: string, password: string): ThunkType =>
    async (dispatch) => {
        let data = await authAPI.login(name, password)
        if (data === 200) {
            dispatch(AuthActions.AuthUser())
        }

    }


export default AuthReducer




