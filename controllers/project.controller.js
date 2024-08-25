const Project = require('../model/project.model');

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

module.exports.getProjectById = (req, res) => {
    Project.findOne({_id: req.params._id})
        .then((foundProject) => {
            if(! foundProject){
                res.statusMessage = 'Proyecto no encontrado.';
                return res.status(404).json({mensaje: 'Proyecto no encontrado.'}); 
            }

            return res.status(200).json(foundProject);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};
module.exports.updateProject = (req, res) => {
    const toUpdate = {};
    const {title, subject, description, dueDate} = req.body;
    
    if(title){
        toUpdate.title = title;
    }

    if(subject){
        toUpdate.subject = subject;
    }

    if(description){
        toUpdate.description = description;
    }
    if(dueDate){
        toUpdate.dueDate = dueDate;
    }

    Project.findOneAndUpdate({_id: req.params._id}, toUpdate, {new: true})
        .then((updatedProject) => {
            return res.status(200).json(updatedProject);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};


