const express = require('express');
const projectRouter = express.Router();
const userControllers = require('../controllers/user.controllers');

projectRouter.post('/register', userControllers.addUser )
projectRouter.post('/login', userControllers.loginUser);


module.exports = projectRouter;