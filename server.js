const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/project.routes");
const cursoRoutes = require("./routes/curso.routes");
const examRoutes = require("./routes/exam.routes");
const gradeRoutes = require("./routes/grade.routes");
const materiaRoutes = require('./routes/materia.routes');

require("./config/config.mongoose");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use("/project", projectRoutes);
app.use("/curso", cursoRoutes);
app.use("/exam", examRoutes);
app.use("/grade", gradeRoutes);
app.use("/materia", materiaRoutes);

app.listen(port, () => console.log(`Conection succesfull at port ${port}`));