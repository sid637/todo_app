// as the document needs the schema which needs to be defined on mongoose 
const mongoose = require('mongoose');
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

// what do we need to be caled our collection in database
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
