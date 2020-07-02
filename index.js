// setting a express server
const express = require('express');
const app = express();
const port = 2000;

// set up express router
app.use('/', require('./routes/index'));

// set up the view engine
app.set('view engine','ejs');
app.set('views', './views')

app.set

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server',err);
    }

    console.log(`server is running on port : ${port}`);
});