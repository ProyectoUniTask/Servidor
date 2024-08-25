const cursoControllers = require('../controllers/curso.controller');
const express = require('express');
const RouterCurso = express.Router();

RouterCurso.post('/new', cursoControllers.addCurso);
RouterCurso.get('/', cursoControllers.allCursos);
RouterCurso.delete('/delete/:id', cursoControllers.deleteCurso);
RouterCurso.get('/:_id', cursoControllers.getCursoById);
RouterCurso.get('/update/:_id', cursoControllers.updateCurso);

module.exports = RouterCurso;