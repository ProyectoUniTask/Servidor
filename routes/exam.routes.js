const express = require('express');
const examRouter = express.Router();
const examControllers = require ('../controllers/exam.controler');

<<<<<<< HEAD
examRouter.post("/create", examControllers.createExam);
examRouter.get("/", examControllers.getAllExams);
examRouter.delete("/delete/:id", examControllers.deleteExam);
examRouter.get("/:_id", examControllers.getExamById);
examRouter.put("/update/:_id", examControllers.updateExam);
=======
examRouter.post('/new', examControllers.createExam);
examRouter.get('/', examControllers.getAllExams);
examRouter.get('/:id', examControllers.getAllExamById);
examRouter.put('/:id/edit', examControllers.updateExam); 
examRouter.delete('/delete/:id', examControllers.deleteExam);
examRouter.put('/add/subject/:title', examControllers.addSubject);
>>>>>>> 109582bddb39228c168deb614aeaf127940d1462

module.exports = examRouter;