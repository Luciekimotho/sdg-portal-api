//import File model
const File = require('../models/file.model.js');

//Create and save new file
exports.create = (req, res) => {
    // if(!req.body.data){
    //     return res.status(400).send({
    //         message: "File cannot be empty"
    //     });
    // }

    //Create the file
    const file = new File({
        title: req.body.title,
        description: req.body.description,
        data: req.body.data
    });

    //Save file in database
    file.save()
     .then(data => {
        res.send(data);
     }).catch(err => {
         res.status(500).send({
             message: err.message || "Error occurred"
         })
     })
}


// Retrieve and return all files from the database.
exports.findAll = (req, res) => {
  File.getMaxListeners(function(err, files){
      if(err){
          res.json({
              status: 'error',
              message: err
          });
      }
      res.json({
          status: "success",
          message: "Files retrieved successfully",
          data: files
      })
  })
};

// Find a single files with a fileId
exports.findOne = (req, res) => {

};

// Update a file identified by the filesId in the request
exports.update = (req, res) => {

};

// Delete a file with the specified filesId in the request
exports.delete = (req, res) => {

};