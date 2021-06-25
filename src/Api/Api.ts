import axios from "axios";
import {GetUserPostType, NullableType, TrueAdInfoType, UserProfileType} from "../Components/Types/Types";
import {postNewAd} from "../Redux/Reducers/AdsReducer";

const AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '35381f05-7fad-43c3-9d23-eda73d59f86b'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
})

const instanse = axios.create({
    baseURL: 'http://avitotest.ru',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
    }
});


export const authAPI = {
    login(name: string , password: string){
        return instanse.post('/account/login/', {
            username: name,
            password: password
        }).then((response: any) => {
            localStorage.setItem('token', response.data.access);
            return response.status
        }).catch((er: any) => {console.log(er)})
    },
    logout() {
        localStorage.removeItem('token')
    }
}

export const profileAPI = {
    getProfile(){
        return instanse.get<UserProfileType>('account/profile_page/')
            .then((res) => {return res.data})
    }
}

type GetAllAdsResType = {
    results: Array<GetUserPostType>
    count: number
}
export const adsAPI = {
    getAllAds(rubric: NullableType<number> = null, page: number = 1, search: string = ''){
        let url = `?page=${page}&search=${search}`
        if (rubric) url = `${rubric}/` + url
        return instanse.get<GetAllAdsResType>(url)
            .then((res) => {return res.data})
    },
    postNewAd(title: string, rubric: number, price?: number, image?:any){
        const formData = new FormData()
        image && formData.append("image", image)
        formData.append("title", title)
        formData.append("rubric", String(rubric))
        formData.append("price", String(price))
        return instanse.post('',formData)
            .then((res) => {
            })
    },
    getAdInfo(pk: number){
        return instanse.get<TrueAdInfoType>('post/' + pk + '/')
            .then(res => {
                return res.data
            })
    },
    deleteAds(adID:number){
        return instanse.delete('post/' + adID + '/')
            .then(res => {
                return res
            })
    },
    addToSelected(adID:number){
        return instanse.post('account/add_selected_post/'+ adID + '/')
    }
}

export const dialogsAPI = {
    getDialogs(){
        return instanse.get('chats/dialog_page/')
            .then(res => {
                return res.data
            })
    },
    createDialog(){
        return instanse.post('chats/dialog_page/', {participants: [1]})
    }

}
