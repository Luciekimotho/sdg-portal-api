let express = require("express");
let bodyParser = require("body-parser");
let moongose = require('mongoose');

let app = express();
let fs = require('fs');

let apiRoutes = require('./app/routes/file.routes.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

moongose.Promise = global.Promise;

moongose.connect('mongodb://localhost:27017/api', {useNewUrlParser:true, useUnifiedTopology: true});
let db = moongose.connection;

if(!db){
    console.log("Connection error");
}else{
    console.log("Connection successful")
}

app.get('/', (req, res, next) => {
    res.send("Hello, and welcome!");
   });

app.use('/api', apiRoutes);

app.listen(3004, () => {
    console.log("Server running on port 3004");
   });





// var db = moongose.connection;
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', function(){
    
    
//     var sdgFile = moongose.model('Sdg', sdgFileSchema);
//     var sdg2018 = new sdgFile({
//          title: '2018 SDG file',
//          description : 'My 2018 SDG file',
//          data: sdgFileData 
//         })
//     sdg2018.save()
//     console.log(sdg2018.data)
// })
