module.exports.home = function(res,res){
    return res.render('home.ejs', {
        title: 'Todo App',
    });
}