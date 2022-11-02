import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {ActionsUser} from "../../redux/reducers/userReducer";
import {AppRootStateType} from "../../redux/store/store";

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, ActionsUser >>()

export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector