const express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const app = express();
const port = 8080;

mongoose.connect('mongodb://localhost:27017/kpenguin', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error',function(){
   console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});
mongoose.connection.once('open',function(callback){
   console.log('Connected to database.');
   
});

cloudinary.config({cloud_name: process.env.CLOUD_NAME, api_key: process.env.API_KEY, api_secret: process.env.API_SECRET});
const storage = cloudinaryStorage({cloudinary: cloudinary, folder: "demo", allowedFormats: ["jpg", "png"], transformation: [{ width: 500, height: 500, crop: "limit" }]});
const parser = multer({ storage: storage });

app.set('port', process.env.port || port);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/scripts')(app);

app.listen(port, () => {
    console.log(`Proceed to http://localhost:${port} to view app.`);
});