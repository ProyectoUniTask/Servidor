const express = require("express");
const examRouter = express.Router();
const examControllers = require("../controllers/exam.controler");

examRouter.post("/create", examControllers.createExam);
examRouter.get("/", examControllers.getAllExams);
examRouter.delete("/delete/:id", examControllers.deleteExam);
examRouter.get("/:_id", examControllers.getExamById);
examRouter.put("/update/:_id", examControllers.updateExam);

module.exports = examRouter;
