import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../utills/hooks/ReduxHooks';
import { createFilesTC, getFilesTC } from '../../redux/thunk/FileThunk';
import FileList from '../../components/FileList/FileList';

const DiskPage = () => {
    const [fileName, setFileName] = useState('');
    const isAuth = useTypedSelector(state => state.user.isAuth);
    const currentDir = useTypedSelector(state => state.file.currentDir);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // console.log(isAuth);
    // useEffect(() => {
    //     if (isAuth) {
    //         navigate('/sign-up');
    //     }
    // }, []);

    useEffect(() => {
        dispatch(getFilesTC(currentDir));
    }, []);

    const onClick = () => {
        dispatch(createFilesTC(fileName, currentDir));
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFileName(e.currentTarget.value);
    };
    return (
        <div>
            <button onClick={onClick}>Add file</button>
            <input type="text" value={fileName} onChange={onChange} />
            <FileList />
        </div>
    );
};

export default DiskPage;