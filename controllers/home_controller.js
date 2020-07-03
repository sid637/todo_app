const Task = require('../models/task');

module.exports.home = function(req,res){

    Task.find({}, function(err, tasks){
        if(err){
            console.log('ERROR IN FETCHING CONTACTS FORM DB');
            return;
        }

        return res.render('home.ejs', {
            title: "Todo - App",
            tasks_list: tasks
        });

    });
   

   
}

module.exports.createTask = function(req, res){
    console.log(req.body);
    Task.create(
        
        req.body,
        function(err, newTask){
            if(err){
                console.log('Error in creating the Task');
                return;
            }

            console.log('***********',newTask);
            return res.redirect('back');
        }
    )

}

module.exports.deleteTask = function(req, res){

    console.log(req.body.task);

    

    let ids = new Array();

    if(typeof(req.body.task) == "string"){
        Task.findByIdAndDelete(req.body.task, function(err){
            if(err){
                console.log('Error in deleting single task from database');
                return;
            }

            return res.redirect('back');
        });
    } else{

    for(let i in req.body.task){
        ids.push(req.body.task[i]);
    }

    Task.deleteMany({_id:{$in:req.body.task}}, function(error){
        if(error){
            console.log('Error in deleting from database');
            return;
        }
        return res.redirect('back');
    });
    
    }

}