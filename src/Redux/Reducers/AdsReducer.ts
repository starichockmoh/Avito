import {AdsType} from "../../Components/Types/Types";


type InitialStateType = {
    Ads: Array<AdsType>
}


let InitialState: InitialStateType = {
    Ads: [
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id:1},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 2},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 3},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 4},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 5},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 6},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 7},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 8},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 9}
    ]
}

const AdsReducer = (state = InitialState, action: any): InitialStateType  => {
    switch (action.type) {
        default:
            return state

    }
}

export default AdsReducer

