import {logInApi} from "../../api/userApi";
import {Dispatch} from "redux";
import {ActionsUser, getUser} from "../reducers/userReducer";

export const registrationTC = (email: string, password: string) => async () => {
    try {
        const response = await logInApi.registration(email, password)
    } catch (e) {
        console.log(e)
    }
}
export const logInTC = (email: string, password: string) => async (dispatch: Dispatch<ActionsUser>) => {
    try {
        const response = await logInApi.logIn(email, password)
        dispatch(getUser(response.data.user))
        localStorage.setItem('userToken',response.data.token)
    } catch (e) {
        console.log(e)
    }
}
export const authTC = () => async (dispatch: Dispatch<ActionsUser>) => {
    try {
        const response = await logInApi.auth()
        dispatch(getUser(response.data.user))
    } catch (e) {
        console.log(e)
        localStorage.removeItem('userToken')
    }
}
