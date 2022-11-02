import React from 'react';

import { FileType } from '../../redux/reducers/fileReducer';

import style from './style.module.css';
import dir from '../../assets/directoryIcon.png';

type Props = {
    file: FileType;
};

const File = ({ file }: Props) => {
    return (
        <div className={style.file}>
            <img className={style.image} src={file.type === 'dir' ? dir : file} alt="icon" />
            <div className={style.name}>{file.name}</div>
            <div className={style.date}>{file.date.toLocaleString().slice(0, 10)}</div>
            <div className={style.size}>{file.size}</div>
        </div>
    );
};

export default File;