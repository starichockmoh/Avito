import axios from "axios";


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



export const getProfile = () => {
    return instanse.get('account/profile_page/')
        .then((res: any) => {return res})
}