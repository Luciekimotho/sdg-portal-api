// module.exports = (app) =>{
//     const files = require('../controllers/file.controller.js');

//     //Create new file
//     app.post('/files', files.create);

//     // Retrieve all files
//     app.get('/files', files.findAll);

//     // Retrieve a single file with fileId
//     app.get('/files/:fileId', files.findOne);

//     // Update a Note with noteId
//     app.put('/files/:fileId', files.update);

//     // Delete a Note with noteId
//     app.delete('/files/:fileId', files.delete);
// }

let router = require('express').Router();

//Default route
router.get('/', function(req, res){
    res.json({
        status: "API working", 
        message: 'Welcome to the REST API'
    });
});

//Import controller
const fileController = require('../controllers/file.controller.js');
router.route('/files')
    .get(fileController.findAll)
    .post(fileController.create);


module.exports = router;