const formidable = require('formidable');
let multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');

//import File model
const File = require('../models/file.model.js');

// global.__basedir = __dirname

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, __basedir + '/uploads')
//     },

//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
//     }
// })

// var upload = multer({ storage: storage })

// Retrieve and return all files from the database.
exports.findAll = function (req, res) {
    console.log(res)
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
    const fileData = []
    const form = formidable.IncomingForm({ 
        multiples: true,
        uploadDir: __dirname + '../../../public' 
     });
     
    form.parse(req, (err, fields, files) => {
      fs.createReadStream(files.file.path)
      .pipe(csv())
      .on('data', (row) => {
            fileData.push(row);
            //console.log(fileData);
            
             //Create new file record
            const file = new File({
                title: fields.title,
                description: fields.description,
                data: files
            });

            //Save file record in database
            file.save(function(err){
                res.json({
                    data: file
                })
            })
      })
      .on('end', () => {
            //console.log('file read')
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