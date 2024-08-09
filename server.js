const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/project.routes");

require("./config/config.mongoose");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use("/project", projectRoutes);

app.listen(port, () => console.log(`Conection succesfull at port ${port}`));