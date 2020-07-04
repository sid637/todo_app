// here we require the library 
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo_db');

// acquire the connection to check if it is succesfull
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// if up and running the print message
db.once('open' , function(){
    console.log('Successfully connected to the database');
});