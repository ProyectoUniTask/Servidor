const Grade = require('../model/grade.model');

module.exports.createGrade = async (req, res) => {
    try {
        const newGrade = await Grade.create(req.body);
        res.status(201).json(newGrade);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.getAllGrades = async (req, res) => {
    try {
        const grades = await Grade.find();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getGradeById = (req, res) => {
    Grade.findOne({_id: req.params._id})
        .then((foundGrade) => {
            if(! foundGrade){
                res.statusMessage = 'Nota no encontrada.';
                return res.status(404).json({mensaje: 'Nota no encontrada.'}); 
            }

            return res.status(200).json(foundGrade);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};
module.exports.deleteGrade = async (req, res) => {
    try {
        const grade = await Grade.findOneAndDelete({ _id: req.params.id });
        if (!grade) {
            return res.status(404).json({ message: "Grade not found." });
        }
        res.status(204).json({ message: "Grade successfully deleted." });
    } catch (error) {
        console.error('Error deleting exam:', error);
        res.status(400).json({ message: error.message });
    }
};
module.exports.updateGrade = (req, res) => {
    const toUpdate = {};
    const {title, subject, description, grade} = req.body;
    
    if(title){
        toUpdate.title = title;
    }

    if(subject){
        toUpdate.subject = subject;
    }

    if(description){
        toUpdate.description = description;
    }
    if(grade){
        toUpdate.date = grade;
    }

    Grade.findOneAndUpdate({_id: req.params._id}, toUpdate, {new: true})
        .then((updatedGrade) => {
            return res.status(200).json(updatedGrade);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};