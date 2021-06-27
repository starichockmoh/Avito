import {ActionsType, ProfileType, UserProfileType} from "../../Components/Types/Types";
import {profileAPI} from "../../Api/Api";
import {AppStateType} from "../Store";
import {ThunkAction} from "redux-thunk";


let InitialState = {
    ProfileInfo: {} as UserProfileType,
}

type InitialStateType = typeof InitialState

const ProfileReducer = (state = InitialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_PROFILE_INFO": {
            return {
                ...state,
                ProfileInfo: action.ProfileData
            }
        }
        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ProfileActionsType>
type ProfileActionsType = ActionsType<typeof ProfileActions>

export const ProfileActions = {
    SetProfileInfo: (ProfileData: UserProfileType) => ({type: "SET_PROFILE_INFO", ProfileData} as const)
}

export const getProfile = (): ThunkType =>
    async (dispatch) => {
        const data = await profileAPI.getProfile()
        dispatch(ProfileActions.SetProfileInfo(data))
    }
export const changeProfile = (username: string,pk: number): ThunkType =>
    async (dispatch) => {
        const data = await profileAPI.changeProfile(username, pk)
    }

export default ProfileReducer

