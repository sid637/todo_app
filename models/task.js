// as the document needs the schema which needs to be defined on mongoose 
// here we require mongoose

const mongoose = require('mongoose');
// here we define our schema i.e what fields needs to be there in document
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
    },
    category: {
        type: String
        
    },
    due_date:{
        type: String
        
    },
    

});

// what do we need to be called our collection in database
// and to use our schema defination, we need to convert our blog schema into a model we can work with
const Task = mongoose.model('Task', taskSchema);

// we have to export our module so that we can use it
module.exports = Task;
