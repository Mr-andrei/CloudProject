import React, {useState} from 'react';

import Input from '../../components/Input/Input';
import Button from "../../components/Button/Button";
import {useAppDispatch} from "../../redux/store/store";
import {registrationTC} from "../../redux/thunk/logInThunks";

import style from './style.module.css'


const Registration = () => {
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onRegistration = () => {
        dispatch(registrationTC(email, password))
    }

    return (
        <div className={style.container}>

            <div className={style.form}>
                <h3 className={style.title}>Sign in</h3>
                <Input value={email} onChange={setEmail} placeholder='Email'/>
                <Input value={password} onChange={setPassword} placeholder='Password'/>
                <Button onClick={onRegistration} name='Send' variant='primary'/>
            </div>
        </div>
    );
};

export default Registration;