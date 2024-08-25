const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert the name of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the subject.']
    },
    description: {
        type: String,
        required: [false]
    },
    instructor: {
        type: String,
        required: [true, 'Please insert the instructor of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the instructor.']
    },
    duration: {
        type: String,
        required: [true, 'Please insert the semester of the subject.']
    },
    date: {
        type: String,
        required: [true, 'Please insert the time of start of the subject.'],
    }
});

const Curso = mongoose.model ("Curso", cursoSchema);

module.exports = Curso;