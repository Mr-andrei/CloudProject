import { Dispatch } from 'redux';
import { fileApi } from '../../api/fileApi';
import {createFilesAC, FileAction, setFilesAC} from '../reducers/fileReducer';

export const getFilesTC = (dirId: string | null) => async (dispatch: Dispatch<FileAction>) => {
    try {
        const response = await fileApi.getFiles(dirId);
        dispatch(setFilesAC(response.data))
    } catch (e) {
        console.log(e);
    }
};
export const createFilesTC = (name: string, dirId: string | null) => async (dispatch: Dispatch<FileAction>) => {
    try {
        const response = await fileApi.createFile(name,dirId);
        dispatch(createFilesAC(response.data))
    } catch (e) {
        console.log(e);
    }
};