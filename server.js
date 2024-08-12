const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/project.routes");
const subjectRoutes = require("./routes/subject.routes");
const examRoutes = require("./routes/exam.routes");

require("./config/config.mongoose");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use("/project", projectRoutes);
app.use("/subject", subjectRoutes);
app.use("/exam", examRoutes);

app.listen(port, () => console.log(`Conection succesfull at port ${port}`));