let express = require("express");
let moongose = require('mongoose');
let cors = require('cors');
let app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use(cors());

let apiRoutes = require('./app/routes/file.routes.js');

moongose.Promise = global.Promise;

moongose.connect('mongodb://localhost:27017/api', {useNewUrlParser:true, useUnifiedTopology: true});
let db = moongose.connection;

if(!db){
    console.log("Connection error");
}else{
    console.log("Connection successful")
}

// app.get('/', (req, res) => {
//     res.send("Hello, and welcome!");
//    });

app.use('/api', apiRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
   });
