const Project = require('../model/project.model');
const { Subject } = require('../model/subject.Model');

module.exports.createProject = async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.params.id });
        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }
        res.status(204).json({ message: "Project successfully deleted." });
    } catch (error) {
        console.error('Error deleting project:', error);
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

            Project.findOneAndUpdate(
                { title: req.body.title },
                { $push: { Subject: foundSubject } },
                { new: true }
            )
                .then((updatedProject) => {
                    if (!updatedProject) {
                        res.statusMessage = 'Project not found.';
                        return res.status(404).json({ message: 'Project not found.' });
                    }
                    return res.status(200).json(updatedProject);
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

