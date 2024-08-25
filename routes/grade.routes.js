const express = require('express');
const gradeRouter = express.Router();
const gradeControllers = require ('../controllers/grade.controller');

gradeRouter.post('/create', gradeControllers.createGrade);
gradeRouter.get('/', gradeControllers.getAllGrades);
gradeRouter.delete('/delete/:id', gradeControllers.deleteGrade);
gradeRouter.get('/:_id', gradeControllers.getGradeById);
gradeRouter.put('/update/:_id', gradeControllers.updateGrade);

module.exports = gradeRouter;