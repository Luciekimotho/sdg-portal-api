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
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        res.json({ fields, files })
    })


    console.log(req.body)

    // if(!req.body.title){
    //     return res.status(400).send({
    //         message: "Title cannot be empty"
    //     });
    // }

    // //Create the file
    // const file = new File({
    //     title: req.body.title,
    //     description: req.body.description,
    //     data: req.body.data
    // });

    // //Save file in database
    // file.save(function(err){
    //     res.json({
    //         message: "New file created",
    //         data: file
    //     })
    // })
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