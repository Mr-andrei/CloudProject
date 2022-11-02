import React from 'react';

import { useTypedSelector } from '../../utills/hooks/ReduxHooks';

import File from '../File/File';
import style from './style.module.css';

const FileList = () => {
    const files = useTypedSelector(state => state.file.files);

    return (
        <div className={style.fileList}>
            <div className={style.header}>
                <div className={style.name}>Name</div>
                <div className={style.date}>Date</div>
                <div className={style.size}>Size</div>
            </div>
            {files.map((file, index) => (
                <File key={file._id} file={file} />
            ))}
        </div>
    );
};

export default FileList;