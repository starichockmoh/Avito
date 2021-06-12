import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import AdsReducer from "./Reducers/AdsReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import AdInfoReducer from "./Reducers/AdInfoReducer";
import DialogsReducer from "./Reducers/DialogsReducer";
import AuthReducer from "./Reducers/AuthReducer";


let MainReducer = combineReducers({
    Ads: AdsReducer,
    Profile: ProfileReducer,
    AdInfo: AdInfoReducer,
    Dialogs: DialogsReducer,
    Auth: AuthReducer
})

type MainReducerType = typeof MainReducer
export type AppStateType = ReturnType<MainReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(MainReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store

// @ts-ignore
window.__store__ = store