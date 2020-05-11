const formidable = require('formidable');

//import File model
const File = require('../models/file.model.js');

// Retrieve and return all files from the database.
exports.findAll = function (req, res) {
    File.get(function(err, files){
        if(err){
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Files retrieved successfully",
            data: files
        })
    })
  };

//Create and save new file
exports.create = function(req, res) {
    const form = formidable.IncomingForm({ multiples: true });
    form.parse(req, (err, fields, files) => {
      //  res.json({ fields, files })

        const file = new File({
            title: fields.title,
            description: fields.description,
            data: files
        });
        console.log(file)
    //Save file in database
        file.save(function(err){
            res.json({
                data: file
            })
        })

    })
}


// Find a single files with a fileId
exports.findOne = (req, res) => {

};

// Update a file identified by the filesId in the request
exports.update = (req, res) => {

};

// Delete a file with the specified filesId in the request
exports.delete = (req, res) => {

};