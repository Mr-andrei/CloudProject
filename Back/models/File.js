import mongoose from "mongoose"


const File = new mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    accessLink: {type: String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    date: {type: Date, default: new Date().toLocaleString()},
    user: {type: mongoose.Types.ObjectId, ref: 'User'},
    parent: {type: mongoose.Types.ObjectId, ref: 'File'},
    childs: [{type: mongoose.Types.ObjectId, ref: 'File'}],
})

export default mongoose.model('File', File)