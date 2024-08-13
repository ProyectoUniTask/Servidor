const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please insert the name of the subject."],
    minLength: [3, "Please use at least 3 letters for the subject."],
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task, TaskSchema };
