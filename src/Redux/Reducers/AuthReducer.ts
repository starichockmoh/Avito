import {AppStateType} from "../Store";
import {ThunkAction} from "redux-thunk";
import {authAPI} from "../../Api/Api";
import { ActionsType } from "../../Components/Types/Types";

let InitialState = {
    isAuth: false,
    init: false
}

type InitialStateType = typeof InitialState


const AuthReducer = (state = InitialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH_USER":
            return {
                ...state,
                isAuth: action.isAuth
            }
        case "INIT_APP":
            return {
                ...state,
                init: action.init
            }
        default:
            return state

    }
}

export const AuthActions = {
    AuthUser: (isAuth: boolean) => ({type: 'AUTH_USER', isAuth} as const),
    InitApp: (init: boolean) => ({type: 'INIT_APP', init} as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AuthActionsType>
type AuthActionsType = ActionsType<typeof AuthActions>

export const Login = (name: string, password: string): ThunkType =>
    async (dispatch) => {
        let data = await authAPI.login(name, password)
        if (data === 200) {
            dispatch(AuthActions.AuthUser(true))
        }
    }
export const StartAuthUser = (): ThunkType =>
    async (dispatch) => {
        const Token = localStorage.getItem('token')
        if (Token) {
            dispatch(AuthActions.AuthUser(true))
        }
    }
export const InitApp = (): ThunkType =>
    async (dispatch) => {
        dispatch(StartAuthUser())
            .then(() => dispatch(AuthActions.InitApp(true)))
    }

export default AuthReducer




