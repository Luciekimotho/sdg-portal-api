const moongose = require('mongoose');

const fileSchema = new moongose.Schema({
    title: String,
    description: String,
    data: Buffer
},{
    timestamps: true
});

var File = module.exports = moongose.model('file', fileSchema)

module.exports.get = function (callback, limit){
    File.find(callback).limit(limit);
}
