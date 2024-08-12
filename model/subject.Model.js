const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please insert the name of the subject.'],
        minLength: [3, 'Please use at least 3 letters for the subject.']
    }
      
});

const Subject = mongoose.model ("Subject", subjectSchema);

module.exports = { Subject, subjectSchema };