// setting a express server
const express = require('express');

// port on which our server is runing
const port = 2000;

// here we require mongoose file where we connected to databases
const db = require('./config/mongoose.js');

const Task = require('./models/task.js');

// here we fired express to get all the functionalities of express
const app = express();


// for static files
app.use(express.static('assets'));

// set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

// to decode the url into objects
app.use(express.urlencoded());


// set up express router
app.use('/', require('./routes/index'));


// listen method creates a listener on a specified port
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
    }

    console.log(`server is running on port : ${port}`);
});