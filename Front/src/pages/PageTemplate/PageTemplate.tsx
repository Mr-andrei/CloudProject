import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

import style from './style.module.css';

type Props = {
    children: JSX.Element;
};

const PageTemplate = ({ children }: Props) => {
    return (
        <div className={style.mainContainer}>
            <NavBar />
            <div className={style.contentContainer}>{children}</div>
        </div>
    );
};

export default PageTemplate;