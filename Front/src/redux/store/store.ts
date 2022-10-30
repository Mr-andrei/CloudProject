import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionsUser, userReducer} from "../reducers/userReducer";
import {fileReducer} from "../reducers/fileReducer";
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    user:userReducer,
    file:fileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type ThunkAPPType = ThunkAction<void, AppRootStateType, unknown, ActionsUser>
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, ActionsUser >>()
export type AppRootStateType = ReturnType<typeof rootReducer>