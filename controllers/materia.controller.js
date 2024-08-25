const { Materia } = require('../model/materia.Model');

module.exports.addMateria = (req, res) => {
    const { materia } = req.body;

    if (!materia) {
        res.statusMessage = 'Por favor agrege el nombre de la materia.';
        return res.status(400).json({ message: 'Por favor agrege el nombre de la materia.' });
    }

    Materia.create(req.body)
        .then((newMateria) => {
            return res.status(201).json(newMateria);
        })
        .catch((error) => {
            console.error('Error adding subject:', error);
            res.statusMessage = 'Error adding subject';
            return res.status(400).json({ message: error.message });
        });
};

module.exports.allMaterias = (req, res) => {
    Materia.find()
        .then((materiaLista) => {
            return res.status(200).json(materiaLista);
        })
        .catch((error) => {
            console.error('Error fetching subjects:', error);
            return res.status(400).json({ message: error.message });
        });
};

module.exports.deleteMateria = async (req, res) => {
    try {
        const materia = await Materia.findOneAndDelete({ _id: req.params.id });
        if (!materia) {
            return res.status(404).json({ message: "Subject not found." });
        }
        res.status(204).json({ message: "Subject successfully deleted." });
    } catch (error) {
        console.error('Error deleting subject:', error);
        res.status(400).json({ message: error.message });
    }
};
module.exports.getMateriaById = (req, res) => {
    Materia.findOne({_id: req.params._id})
        .then((foundMateria) => {
            if(! foundMateria){
                res.statusMessage = 'Materia no encontrado.';
                return res.status(404).json({mensaje: 'Materia no encontrado.'}); 
            }

            return res.status(200).json(foundMateria);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};
module.exports.updateMateria = (req, res) => {
    const toUpdate = {};
    const {materia, profesor, semestre, inicio, fin} = req.body;
    
    if(materia){
        toUpdate.materia = materia;
    }

    if(profesor){
        toUpdate.profesor = profesor;
    }
    if(semestre){
        toUpdate.semestre = semestre;
    }
    if(inicio){
        toUpdate.inicio = inicio;
    }
    if(fin){
        toUpdate.fin = fin;
    }

    Materia.findOneAndUpdate({_id: req.params._id}, toUpdate, {new: true})
        .then((updatedMateria) => {
            return res.status(200).json(updatedMateria);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};