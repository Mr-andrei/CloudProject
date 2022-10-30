import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
})
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWVhNjY1ZDI1MDI4N2IyZWY2ZjQzZCIsImlhdCI6MTY2NzE1NjI0MiwiZXhwIjoxNjY3MTU5ODQyfQ.8F6AXNnlB9BvZNFaypTDlT8zWfrksG7DcxEyZTQPlAo'
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