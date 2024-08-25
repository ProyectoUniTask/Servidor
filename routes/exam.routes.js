const express = require('express');
const examRouter = express.Router();
const examControllers = require ('../controllers/exam.controler');

examRouter.post('/new', examControllers.createExam);
examRouter.get('/', examControllers.getAllExams);
examRouter.get('/:id', examControllers.getAllExamById);
examRouter.put('/:id/edit', examControllers.updateExam); 
examRouter.delete('/delete/:id', examControllers.deleteExam);
examRouter.put('/add/subject/:title', examControllers.addSubject);

module.exports = examRouter;