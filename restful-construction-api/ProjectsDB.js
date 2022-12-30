const connectDB = require("./db/conection");
const Project = require("./models/projects");

require("dotenv").config();

const ProjectJson = require("./Projects.json");


const start = async () => {

    try {
        await connectDB(process.env.MONGODB_URL)
        await Project.deleteMany();
        await Project.create(ProjectJson)
        console.log("success");
    } catch (error) {
        console.log(error);
    }

}


start();
