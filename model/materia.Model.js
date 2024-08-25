const mongoose = require('mongoose');

const materiaSchema = mongoose.Schema({
    materia: {
        type: String,
        required: [true, 'Por favor ingrese la materia']
    },
    profesor: {
        type: String,
        required: [true, 'Por favor ingrese el nombre del profesor.']
    },
    semestre: {
        type: String,
        required: [true, 'Por favor ingrese el semestre que corresponde']
    },
    inicio: {
        type: String,
        required: [true, 'Por favor ingrese la hora de inicio.']
    },
    fin: {
        type: String,
        required: [true, 'Por favor ingrese la hora de finalizacion.'],
    }
});

const Materia = mongoose.model ("Materia", materiaSchema);

module.exports = Materia;