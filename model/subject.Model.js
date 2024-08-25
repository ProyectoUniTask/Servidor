const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert the name of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the subject.']
    },
    description: {
        type: String,
        required: [true, 'Please insert the description of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the subject.']
    },
    duration: {
        type: Number,
        required: [true, 'Please insert the duration of the subject.']
    },
    instructor: {
        type: String,
        required: [true, 'Please insert the description of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the subject.']
    },
    date: {
        type: Date,
        required: [true, 'Please insert the date for the subject.'],
    }
});

const Subject = mongoose.model ("Subject", subjectSchema);

module.exports = { Subject, subjectSchema };