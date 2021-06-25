import {ActionsType, DialogsDataType, DialogType} from "../../Components/Types/Types";
import {authAPI, dialogsAPI, profileAPI} from "../../Api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../Store";


let InitialState = {
    Dialogs: {},
    CurrentDialog: {}
}

type InitialStateType = typeof InitialState

const DialogReducer = (state = InitialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, DialogsActionsType>
type DialogsActionsType = ActionsType<typeof DialogsActions>

const DialogsActions = {}

export const GetDialogs = (): ThunkType =>
    async (dispatch) => {
        let data = await dialogsAPI.getDialogs()
    }

export default DialogReducer

