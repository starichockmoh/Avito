import {ActionsType, AdsType, GetUserPostType, NullableType} from "../../Components/Types/Types";
import {AppStateType} from "../Store";
import {ThunkAction} from "redux-thunk";
import {adsAPI, profileAPI} from "../../Api/Api";
import {getProfile, ProfileActions} from "./ProfileReducer";


let InitialState = {
    Ads: [] as Array<GetUserPostType>,
    Count: 0,
    CurrentRubric: null as NullableType<number>
}
type InitialStateType = typeof InitialState


const AdsReducer = (state = InitialState, action: AdsActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_ALL_ADS": {
            return {
                ...state,
                Ads: action.AdsData
            }
        }
        case "SET_TOTAL_COUNT": {
            return {
                ...state,
                Count: action.Count
            }
        }
        case "SET_CURRENT_RUBRIC": {
            return {
                ...state,
                CurrentRubric: action.Rubric
            }
        }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AdsActionsType>
type AdsActionsType = ActionsType<typeof AdsActions>
const AdsActions = {
    SetAllAds: (AdsData: Array<GetUserPostType>) => ({type: "SET_ALL_ADS", AdsData} as const),
    SetTotalCount: (Count: number) => ({type: "SET_TOTAL_COUNT", Count} as const),
    SetCurrentRubric: (Rubric: number | null) => ({type: "SET_CURRENT_RUBRIC", Rubric} as const)
}

export const getAllAds = (rubric: NullableType<number> = null, page?: number, search?: string): ThunkType =>
    async (dispatch) => {
        const data = await adsAPI.getAllAds(rubric, page, search)
        dispatch(AdsActions.SetAllAds(data.results))
        dispatch(AdsActions.SetTotalCount(data.count))
        dispatch(AdsActions.SetCurrentRubric(rubric))
    }

export const postNewAd = (title: string, rubric: number, price?: number, image?: any): ThunkType =>
    async (dispatch) => {
        const data = await adsAPI.postNewAd(title, rubric, price, image)
    }

export const deleteAd = (adID: number): ThunkType =>
    async (dispatch) => {
        const data = await adsAPI.deleteAds(adID)
        dispatch(getProfile())
    }
export const addToSelected = (adID: number): ThunkType =>
    async (dispatch) => {
        const data = await adsAPI.addToSelected(adID)
    }
export default AdsReducer

