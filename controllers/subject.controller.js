const { Subject } = require('../model/subject.Model');

module.exports.addSubject = (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.statusMessage = 'Please add the name of the subject.';
        return res.status(400).json({ message: 'Please add the name of the subject.' });
    }

    Subject.create(req.body)
        .then((newSubject) => {
            return res.status(201).json(newSubject);
        })
        .catch((error) => {
            console.error('Error adding subject:', error);
            res.statusMessage = 'Error adding subject';
            return res.status(400).json({ message: error.message });
        });
};

module.exports.allSubjects = (req, res) => {
    Subject.find()
        .then((subjectList) => {
            return res.status(200).json(subjectList);
        })
        .catch((error) => {
            console.error('Error fetching subjects:', error);
            return res.status(400).json({ message: error.message });
        });
};

module.exports.allSubjectById = (req, res) => {
    Subject.findById(req.params.id)
        .then((subject) => {
            if (!subject) {
                return res.status(404).json({ message: 'Subject not found' });
            }
            res.status(200).json(subject);
        })
        .catch((error) => {
            console.log(error.message);
            res.status(400).json(error.message);
        });
};

module.exports.updateSubject = async (req, res) => {
    try {
        const subjectUpdate = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subjectUpdate) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        return res.status(200).json(subjectUpdate);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: error.message });
    }
};

module.exports.deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findOneAndDelete({ _id: req.params.id });
        if (!subject) {
            return res.status(404).json({ message: "Subject not found." });
        }
        res.status(200).json({ message: "Subject successfully deleted." }); 
    } catch (error) {
        console.error('Error deleting subject:', error);
        res.status(400).json({ message: error.message });
    }
};