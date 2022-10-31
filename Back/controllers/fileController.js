import fileService from "../services/file.service.js";
import User from '../models/User.js'
import File from '../models/File.js'


class FileController {

    async createDir(req, res) {
        try {
            const {name, type, parent} = req.body
            const file = new File({name, type, parent, user: req.user.id})

            const parentFile = await File.findOne({id: parent})
            console.log(parentFile)
            if (!parentFile) {
                file.path = name
                await fileService.createDir(file)
            }
            else {
                file.path = `${parentFile.path}\\${file.name}`
                // await fileService.createDir(file)
                parentFile.childs.push(file._id)
                await parentFile.save()


            }
            await file.save()
            return res.json(file)
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Server error'})
        }
    }

    async fetFiles(req, res) {
        try {
            const files = await File.find({user: req.user.id, parent: req.query.parent})
            return res.json({files})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Can not get file'})
        }
    }

}

export default new FileController()