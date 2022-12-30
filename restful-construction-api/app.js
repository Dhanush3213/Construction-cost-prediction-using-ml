// require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/conection");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const projects_routes = require("./routes/projects");

app.get("/", (req, res) => {
    res.send("Hi, I am live ");
});

// middleware or to set router
app.use("/api/projects", projects_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();  