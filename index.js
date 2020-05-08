let express = require("express");
let bodyParser = require("body-parser");
let moongose = require('mongoose');
const formidable = require('formidable');

let app = express();

let apiRoutes = require('./app/routes/file.routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));

moongose.Promise = global.Promise;

moongose.connect('mongodb://localhost:27017/api', {useNewUrlParser:true, useUnifiedTopology: true});
let db = moongose.connection;

if(!db){
    console.log("Connection error");
}else{
    console.log("Connection successful")
}

app.get('/', (req, res) => {
    res.send("Hello, and welcome!");
   });

app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });
