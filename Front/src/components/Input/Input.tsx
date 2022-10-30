import React, {ChangeEvent} from 'react';
import style from './style.module.css'

type Props = {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string
}

const Input = ({onChange, value, placeholder}: Props) => {

    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }
    return (
        <input
            className={style.input}
            value={value}
            onChange={handelChange}
            placeholder={placeholder}
            type="text"
        />
    );
};

export default Input;