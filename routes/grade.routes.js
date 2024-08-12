const express = require('express');
const gradeRouter = express.Router();
const gradeControllers = require ('../controllers/grade.controller');

gradeRouter.post('/create', gradeControllers.createGrade);
gradeRouter.get('/', gradeControllers.getAllGrades);
gradeRouter.delete('/delete/:id', gradeControllers.deleteGrade);
gradeRouter.put('/add/subject/:title', gradeControllers.addSubject);

module.exports = gradeRouter;