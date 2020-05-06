const moongose = require('mongoose');


const FileSchema = new moongose.Schema({
    title: String,
    description: String,
    data: Buffer
},{
    timestamps: true
})

module.exports = moongose.model('File', FileSchema)
