import {AdsType, ProfileType} from "../../Components/Types/Types";


type InitialStateType = ProfileType

let InitialState: InitialStateType = {
    Deals: 4,
    Photos: null,
    Name: 'Ilich',
    LastName: 'Yan',
    Avatar: 'https://get.wallhere.com/photo/white-T-shirt-sunglasses-glasses-photography-moustache-military-boy-cool-man-beard-cigar-vision-care-facial-hair-eyewear-stern-human-behavior-790615.jpg',
    UserId: 1,
    UserAds: [
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 1},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 2},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 3},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 4},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 5},
        {name: 'Камаз 53229', price: 1620000, location: 'Чайковский', image: 'https://43.img.avito.st/640x480/10833858843.jpg', id: 6},
    ],
    LogUpData: '12 June 2016'
}

const ProfileReducer = (state = InitialState, action: any): InitialStateType  => {
    switch (action.type) {
        default:
            return state
    }
}

export default ProfileReducer

