import React from 'react';
import style from './style.module.css'

type Props = {
    onClick: () => void;
    name: string;
    variant: 'primary' | 'ghost';
}

const Button = ({onClick, name, variant}: Props) => {

    const handelClick = () => {
        onClick()
    }
    return (
        <button className={variant === 'primary' ? style.buttonPrimary : style.buttonGhost}
                onClick={handelClick}>{name}</button>
    );
};

export default Button;