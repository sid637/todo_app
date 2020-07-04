// here all actions are there


// we need to require defined schema
// with this Task we can populate our collection
const Task = require('../models/task');

// this is controller for main page i.e home page
module.exports.home = function(req,res){

    Task.find({}, function(err, tasks){
        if(err){
            console.log('ERROR IN FETCHING CONTACTS FORM DB');
            return;
        }

        // here we render our template engine file
        return res.render('home.ejs', {
            title: "Harth Todo - App",
            tasks_list: tasks
        });

    });
   

   
}


// this controller is to create task
module.exports.createTask = function(req, res){
    console.log(req.body);

    // this method is to create new entry in database
    Task.create(
        // here we pass body of our request containing form results
        req.body,

        function(err, newTask){
            if(err){
                console.log('Error in creating the Task');
                return;
            }

            console.log('***********',newTask);

            // after creating task page will return to home page
            return res.redirect('back');
        }
    )

}


// this controller is to delete task
module.exports.deleteTask = function(req, res){

    console.log(req.body.task);

    

    let ids = new Array();

    // if the request is to delete only single task
    if(typeof(req.body.task) == "string"){
        // here we use mongoose method to to delete from database by id
        Task.findByIdAndDelete(req.body.task, function(err){
            if(err){
                console.log('Error in deleting single task from database');
                return;
            }

            return res.redirect('back');
        });

    }
    // if the request is to delete multiple tasks
    else{

    for(let i in req.body.task){
        ids.push(req.body.task[i]);
    }
         // here we use mongoose method to to delete many elements from database by id
    Task.deleteMany({_id:{$in:req.body.task}}, function(error){
        if(error){
            console.log('Error in deleting from database');
            return;
        }

        // after deleting from database return back to the main page
        return res.redirect('back');
    });
    
    }

}