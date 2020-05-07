const moongose = require('mongoose');


const FileSchema = new moongose.Schema({
    title: String,
    description: String,
    data: Buffer
},{
    timestamps: true
})

var File = module.exports = moongose.model('File', FileSchema)

module.exports.get = function(callback, limit){
    File.find(callback).limit(limit);
}
