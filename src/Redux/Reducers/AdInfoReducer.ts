import {AdInfoType, AdsType} from "../../Components/Types/Types";


type InitialStateType = AdInfoType

let InitialState: InitialStateType = {
    AdId: 1,
    Author: 'Ilich',
    Created_at: '14 June 2019',
    Images: ['https://carakoom.com/data/wall/787/623f28e7.jpg',
        'https://avatars.mds.yandex.net/get-zen_doc/3976017/pub_5f50b3601a1ddf4776509d57_5f50b3a450251b5303b918d2/scale_1200',
        'https://a.d-cd.net/EsAAAgBaROA-1920.jpg'],
    Price: 1500000,
    Title: 'ЗИЛ 1488 ранний',
    Views: 13,
    Comments: [
        {Body: 'Вот эта машинка, я б вдул !!!))', Likes: 228, Views: 4, CommentId: 1, Author: 'HanSolo', Avatar:'https://a.d-cd.net/EsAAAgBaROA-1920.jpg', UserId:1},
        {Body: 'Где посмотреть?', Likes: 228, Views: 4, CommentId: 2, Author: 'HanSolo', Avatar:'https://a.d-cd.net/EsAAAgBaROA-1920.jpg', UserId:1},
        {Body: 'фарту всем блатным, вечер в хату чифир с сладость кашу в радость', Likes: 22, Views: 3, CommentId: 3, Author: 'HanSolo', Avatar:'https://a.d-cd.net/EsAAAgBaROA-1920.jpg', UserId:1},
    ],
    Description: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
}

const AdInfoReducer = (state = InitialState, action: any): InitialStateType  => {
    switch (action.type) {
        default:
            return state

    }
}

export default AdInfoReducer

