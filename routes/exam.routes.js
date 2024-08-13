const express = require("express");
const examRouter = express.Router();
const examControllers = require("../controllers/exam.controler");

examRouter.post("/create", examControllers.createExam);
examRouter.get("/", examControllers.getAllExams);
examRouter.delete("/delete/:id", examControllers.deleteExam);
examRouter.put("/add/subject/:title", examControllers.addSubject);

module.exports = examRouter;
