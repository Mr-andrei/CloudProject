import axios from 'axios';
import { FileType } from '../redux/reducers/fileReducer';
// router.post('/create-file',authMiddleware,fileController.createDir )
// router.get('/get-file',authMiddleware,fileController.fetFiles )

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/files',
});
export const fileApi = {
    getFiles(dirId: string | null) {
        return instance.get(`get-file${dirId ? 'parent=' + dirId : ''}`, {
            headers: { authorization: `Bearer ${localStorage.getItem('userToken')}` },
        });
    },
    createFile(name: string, dirId: string | null) {
        return instance.post(
            'create-file',
            { name, parent: dirId, type: 'dir' },
            {
                headers: { authorization: `Bearer ${localStorage.getItem('userToken')}` },
            }
        );
    },
};