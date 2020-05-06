let express = require("express");
let bodyParser = require("body-parser");
let moongose = require('mongoose');

let app = express();
let fs = require('fs');

let apiRoutes = require('./app/routes/file.routes.js');
app.get("/", (req, res, next) => {
    res.send("Hello, and welcome!");
   });

app.use('/api', apiRoutes);
app.listen(3004, () => {
 console.log("Server running on port 3004");
});

moongose.Promise = global.Promise;

const sdgFileSchema = new moongose.Schema({
    title: String,
    description: String,
    data: Buffer
})


moongose.connect('mongodb://localhost:27017/api', {useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    const sdgFileData = fs.readFileSync(__dirname + '/countries.csv');
    let sdgFile = moongose.model('Sdg', sdgFileSchema);

    //Create sdg file instance
    const sdg2018 = new sdgFile({
        title: '2018 SDG file',
        description : 'My 2018 SDG file',
        data: sdgFileData 
       });

       sdg2018.save()
       .then(file => {
           console.log("Saved file to Mongodb")
           sdgFile.findById(file, (err, findOutFile) => {
               if (err) throw err;
               try{
                   fs.writeFileSync(__dirname + '/assets/countries.csv', findOutFile.data)
               }catch(e){
                   console.log(e)
               }
           });
       }).catch(err => {
           console.log(err);
           throw err;
       })

}).catch(err => {
    console.log('Could not connect to Mongodb')
    process.exit();
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
