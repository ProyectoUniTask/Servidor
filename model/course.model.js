const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert the name of the course.'],
        minLength: [3, 'Please use at least 3 letters for the course.']
    },
    description: {
        type: String,
        required: [true, 'Please insert the description of the course.'],
        minLength: [3, 'Please use at least 3 letters for the course.']
    },
    instructor: {
        type: String,
        required: [true, 'Please insert the description of the course.'],
        minLength: [3, 'Please use at least 3 letters for the course.']
    },
    date: {
        type: Date,
        required: [true, 'Please insert the date for the course.'],
    },
    duration: {
        type: Number,
        required: [true, 'Please insert the duration of the course.']
    },
});

const Course = mongoose.model ("Course", courseSchema);

module.exports = { Course, courseSchema };