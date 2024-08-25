const subjectControllers = require('../controllers/subject.controller');
const express = require('express');
const RouterSubject = express.Router();

RouterSubject.post('/new', subjectControllers.addSubject);
RouterSubject.get('/', subjectControllers.allSubjects);
RouterSubject.get('/:id', subjectControllers.allSubjectById);
RouterSubject.put('/:id/edit', subjectControllers.updateSubject);  
RouterSubject.delete('/delete/:id', subjectControllers.deleteSubject);

module.exports = RouterSubject;