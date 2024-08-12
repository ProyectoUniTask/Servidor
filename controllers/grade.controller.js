const Grade = require('../model/grade.model');
const { Subject } = require('../model/subject.Model');

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

module.exports.deleteGrade = async (req, res) => {
    try {
        const grade = await Grade.findOneAndDelete({ _id: req.params.id });
        if (!grade) {
            return res.status(404).json({ message: "Grade not found." });
        }
        res.status(204).json({ message: "Grade successfully deleted." });
    } catch (error) {
        console.error('Error deleting grade:', error);
        res.status(400).json({ message: error.message });
    }
};


module.exports.addSubject = (req, res) => {
    Subject.findOne({ name: req.body.name })
        .then((foundSubject) => {
            if (!foundSubject) {
                res.statusMessage = 'Subject not found.';
                return res.status(404).json({ message: 'Subject not found.' });
            }

            Grade.findOneAndUpdate(
                { title: req.body.title },
                { $push: { Subject: foundSubject } },
                { new: true }
            )
                .then((updatedGrade) => {
                    if (!updatedGrade) {
                        res.statusMessage = 'Grade not found.';
                        return res.status(404).json({ message: 'Grade not found.' });
                    }
                    return res.status(200).json(updatedGrade);
                })
                .catch((error) => {
                    console.error('Error updating grade:', error);
                    return res.status(400).json({ message: error.message });
                });
        })
        .catch((error) => {
            console.error('Error finding grade:', error);
            return res.status(400).json({ message: error.message });
        });
};