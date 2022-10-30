import React, {useState} from 'react';
import Input from "../../components/Input/Input";
import style from "./style.module.css"
import Button from "../../components/Button/Button";
import {logInTC} from "../../redux/thunk/logInThunks";
import {useAppDispatch} from "../../redux/store/store";

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUp = () => {
        dispatch(logInTC(email, password))
    }

    return (
        <div className={style.container}>

            <div className={style.form}>
                <h3 className={style.title}>Sign up</h3>
                <Input value={email} onChange={setEmail} placeholder='Email'/>
                <Input value={password} onChange={setPassword} placeholder='Password'/>
                <Button onClick={onSignUp} name='SignUp' variant='primary' />
            </div>
        </div>
    );
};

export default LoginPage;