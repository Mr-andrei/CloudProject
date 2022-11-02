import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
})

export const logInApi = {
    registration  (email:string,password:string){
        return instance.post('registration', {email,password});
    },
    logIn(email:string,password:string){
        return instance.post('login', {email,password});
    } ,
    auth(){
        return instance.get('isAuth',
            {headers:{authorization:`Bearer ${localStorage.getItem('userToken')}`}});
            // {headers:{authorization:`Bearer ${token}`}});
    }
}