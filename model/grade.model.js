const mongoose = require('mongoose');
const { subjectSchema } = require ('./subject.Model');

const gradeSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please insert the name of the project.'],
        minLength: [3, 'Please use at least 3 letters for the title.']
    },
    subject: [subjectSchema],
    description: {
        type: String,
        required: [false]
    },
    grade: {
        type: Number,
        required: [true, 'Please insert a grade.'],
        maxlength:[5]
    },
      
});

const Grade = mongoose.model ("Grade", gradeSchema);

module.exports = Grade;