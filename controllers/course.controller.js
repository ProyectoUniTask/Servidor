const { Course } = require('../model/course.model');  

module.exports.addCourse = (req, res) => {  
    const { name } = req.body;

    if (!name) {
        res.statusMessage = 'Please add the name of the course.';  
        return res.status(400).json({ message: 'Please add the name of the course.' });
    }

    Course.create(req.body)  
        .then((newCourse) => { 
            return res.status(201).json(newCourse);
        })
        .catch((error) => {
            console.error('Error adding course:', error); 
            res.statusMessage = 'Error adding course'; 
            return res.status(400).json({ message: error.message });
        });
};

module.exports.allCourses = (req, res) => {  
    Course.find()  
        .then((courseList) => { 
            return res.status(200).json(courseList);
        })
        .catch((error) => {
            console.error('Error fetching courses:', error);  
            return res.status(400).json({ message: error.message });
        });
};

module.exports.courseById = (req, res) => {  
    Course.findById(req.params.id)  
        .then((course) => {  
            if (!course) {  
                return res.status(404).json({ message: 'Course not found' });  
            }
            res.status(200).json(course);
        })
        .catch((error) => {
            console.log(error.message);
            res.status(400).json(error.message);
        });
};

module.exports.updateCourse = async (req, res) => {  
    try {
        const courseUpdate = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
        if (!courseUpdate) {  
            return res.status(404).json({ message: 'Course not found' }); 
        }
        return res.status(200).json(courseUpdate);  
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: error.message });
    }
};

module.exports.deleteCourse = async (req, res) => {  
    try {
        const course = await Course.findOneAndDelete({ _id: req.params.id }); 
        if (!course) { 
            return res.status(404).json({ message: "Course not found." }); 
        }
        res.status(200).json({ message: "Course successfully deleted." });  
    } catch (error) {
        console.error('Error deleting course:', error); 
        res.status(400).json({ message: error.message });
    }
};