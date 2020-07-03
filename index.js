// setting a express server
const express = require('express');

const port = 2000;

const db = require('./config/mongoose.js');

const Task = require('./models/task.js');


const app = express();


// for static files
app.use(express.static('assets'));

// set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

// to decode te url into objects
app.use(express.urlencoded());


// set up express router
app.use('/', require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
    }

    console.log(`server is running on port : ${port}`);
});