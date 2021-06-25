import {ActionsType, AdInfoType, TrueAdInfoType} from "../../Components/Types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../Store";
import {adsAPI} from "../../Api/Api";

// AdId: 1,
//     Author: 'Ilich',
//     Created_at: '14 June 2019',
//     Images: ['https://carakoom.com/data/wall/787/623f28e7.jpg',
//     'https://avatars.mds.yandex.net/get-zen_doc/3976017/pub_5f50b3601a1ddf4776509d57_5f50b3a450251b5303b918d2/scale_1200',
//     'https://a.d-cd.net/EsAAAgBaROA-1920.jpg'],
//     Price: 1500000,
//     Title: 'ЗИЛ 1488 ранний',
//     Views: 13,
//     Comments: [
//     {
//         Body: 'Вот эта машинка, я б вдул !!!))',
//         Likes: 228,
//         Views: 4,
//         CommentId: 1,
//         Author: 'HanSolo',
//         Avatar: 'https://a.d-cd.net/EsAAAgBaROA-1920.jpg',
//         UserId: 1
//     },
//     {
//         Body: 'Где посмотреть?',
//         Likes: 228,
//         Views: 4,
//         CommentId: 2,
//         Author: 'HanSolo',
//         Avatar: 'https://a.d-cd.net/EsAAAgBaROA-1920.jpg',
//         UserId: 1
//     },
//     {
//         Body: 'фарту всем блатным, вечер в хату чифир с сладость кашу в радость',
//         Likes: 22,
//         Views: 3,
//         CommentId: 3,
//         Author: 'HanSolo',
//         Avatar: 'https://a.d-cd.net/EsAAAgBaROA-1920.jpg',
//         UserId: 1
//     },
// ],
//     Description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
// 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product p


let InitialState = {
     AdInfo: {} as TrueAdInfoType
}

type InitialStateType = typeof InitialState


const AdInfoReducer = (state = InitialState, action: AdInfoActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_AD_INFO": {
            return {
                ...state,
                AdInfo: action.AdInfo

            }
        }
        default:
            return state

    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, any, AdInfoActionsType>
type AdInfoActionsType = ActionsType<typeof AdInfoActions>


export const AdInfoActions = {
    SetAdInfo: (AdInfo: TrueAdInfoType) => ({type: "SET_AD_INFO", AdInfo} as const)
}

export const GetAdInfo = (pk: number): ThunkType =>
    async (dispatch) => {
        const data = await adsAPI.getAdInfo(pk)
        dispatch(AdInfoActions.SetAdInfo(data))

    }

export default AdInfoReducer

