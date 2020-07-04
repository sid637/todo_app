// SETUP express routers
// here we require express to use all methods of express
const express = require('express');

// it creates a new route handler
const router = express.Router();

// here we require js file(home_controller) in which all the controllers are present
const homeController = require('../controllers/home_controller');

// here router is handling get request for '/' url
router.get('/', homeController.home);

// here router is handling post request for '/create-task' url
router.post('/create-task', homeController.createTask);

// here router is handling post request for '/delete-task' url
router.post('/delete-task', homeController.deleteTask);

// to further use our module
module.exports = router;