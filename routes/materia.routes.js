const materiaControllers = require('../controllers/materia.controller');
const express = require('express');
const RouterMateria = express.Router();

RouterMateria.post('/new', materiaControllers.addMateria);
RouterMateria.get('/', materiaControllers.allMaterias);
RouterMateria.delete('/delete/:id', materiaControllers.deleteMateria);
RouterMateria.get('/:_id', materiaControllers.getMateriaById);
RouterMateria.put('/update/:_id', materiaControllers.updateMateria);

module.exports = RouterMateria;