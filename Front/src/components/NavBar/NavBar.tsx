import React from 'react';
import cloud from '../../assets/cloud.png';
import style from './style.module.css'
import {Link} from "react-router-dom";
import {RoutesConfig} from "../../routes/RouteFile";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store/store";
import Button from "../Button/Button";
import {removeUser} from "../../redux/reducers/userReducer";


const NavBar = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.user.isAuth)
    const onRemoveUser = () => dispatch(removeUser())


    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.logoContainer}>
                    <Link to='/'><img className={style.logoImage} src={cloud} alt="CloudImage"/></Link>
                </div>
                <div className={style.registrationBlock}>
                    {!isAuth && <Link to={RoutesConfig.signIn} className={style.logBtn}>Sign in</Link>}
                    {!isAuth && <Link to={RoutesConfig.signUp} className={style.signUpBtn}>Sign up</Link>}
                    {isAuth &&<Button onClick={onRemoveUser} name='Log out' variant="primary"/>}
                </div>
            </div>
        </div>
    );
};

export default NavBar;