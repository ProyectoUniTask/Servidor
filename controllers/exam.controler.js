const Exam = require('../model/exam.model');
const { Subject } = require('../model/subject.Model');

module.exports.createExam = async (req, res) => {
    try {
        const newExam = await Exam.create(req.body);
        res.status(201).json(newExam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteExam = async (req, res) => {
    try {
        const exam = await Exam.findOneAndDelete({ _id: req.params.id });
        if (!exam) {
            return res.status(404).json({ message: "Exam not found." });
        }
        res.status(204).json({ message: "Exam successfully deleted." });
    } catch (error) {
        console.error('Error deleting exam:', error);
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

            Exam.findOneAndUpdate(
                { title: req.body.title },
                { $push: { Subject: foundSubject } },
                { new: true }
            )
                .then((updatedExam) => {
                    if (!updatedExam) {
                        res.statusMessage = 'Exam not found.';
                        return res.status(404).json({ message: 'Exam not found.' });
                    }
                    return res.status(200).json(updatedExam);
                })
                .catch((error) => {
                    console.error('Error updating project:', error);
                    return res.status(400).json({ message: error.message });
                });
        })
        .catch((error) => {
            console.error('Error finding subject:', error);
            return res.status(400).json({ message: error.message });
        });
};