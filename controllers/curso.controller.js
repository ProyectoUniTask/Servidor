const { Curso } = require('../model/curso.Model');

module.exports.addCurso = (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.statusMessage = 'Please add the name of the subject.';
        return res.status(400).json({ message: 'Please add the name of the subject.' });
    }

    Curso.create(req.body)
        .then((newCurso) => {
            return res.status(201).json(newCurso);
        })
        .catch((error) => {
            console.error('Error adding subject:', error);
            res.statusMessage = 'Error adding subject';
            return res.status(400).json({ message: error.message });
        });
};

module.exports.allCursos = (req, res) => {
    Curso.find()
        .then((cursoLista) => {
            return res.status(200).json(cursoLista);
        })
        .catch((error) => {
            console.error('Error fetching subjects:', error);
            return res.status(400).json({ message: error.message });
        });
};

module.exports.deleteCurso = async (req, res) => {
    try {
        const curso = await Curso.findOneAndDelete({ _id: req.params.id });
        if (!curso) {
            return res.status(404).json({ message: "Subject not found." });
        }
        res.status(204).json({ message: "Subject successfully deleted." });
    } catch (error) {
        console.error('Error deleting subject:', error);
        res.status(400).json({ message: error.message });
    }
};
module.exports.getCursoById = (req, res) => {
    Curso.findOne({_id: req.params._id})
        .then((foundCurso) => {
            if(! foundCurso){
                res.statusMessage = 'Curso no encontrado.';
                return res.status(404).json({mensaje: 'Curso no encontrado.'}); 
            }

            return res.status(200).json(foundCurso);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};
module.exports.updateCurso = (req, res) => {
    const toUpdate = {};
    const {name, description, instructor, duration, date} = req.body;
    
    if(name){
        toUpdate.name = name;
    }

    if(description){
        toUpdate.description = description;
    }
    if(instructor){
        toUpdate.instructor = instructor;
    }
    if(duration){
        toUpdate.duration = duration;
    }
    if(date){
        toUpdate.date = date;
    }

    Curso.findOneAndUpdate({_id: req.params._id}, toUpdate, {new: true})
        .then((updatedCurso) => {
            return res.status(200).json(updatedCurso);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};