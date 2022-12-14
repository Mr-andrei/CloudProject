import fs from 'fs'
import File from '../models/File.js'
import config from 'config'

class FileService {
    createDir(file) {
        const filePath = `${config.get('filePath')}\\${file.user}\\${file.path}`
        return new Promise((resolve, reject) => {
            try {
                if(!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'File was created'})
                }
                else {
                    return reject({message: 'File already exist'})
                }
            }
            catch (e) {
                console.log(e)
                return reject({message: 'File error'})
            }
        })
    }
}

export default new FileService()