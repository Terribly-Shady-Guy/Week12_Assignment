const express = require("express");
const app = express();
const PORT = 1200;
app.use(express.json());

const nodemon = require("nodemon");

const mongoose = require("mongoose");

const connectionString = "mongodb+srv://admin:db1212@group4a4db.d6cdj1h.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "db connection error"));
db.once("open", () => console.log("connected to database successfully"));


//put code to get db schema here
require("./Models/student.js");
const student = mongoose.model("Students");

require("./Models/courses.js");
const course = mongoose.model("Course");

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));

app.get(`/getAllCourses`, (req, res) => {
    try{
        return res.status(200).json("Test getAllCourses");
    }
    catch{
        return res.status(500);
    }
});

app.get(`/getAllStudents`, (req, res) => {
    try{
        return res.status(200).json("Test getAllStudents");
    }
    catch{
        return res.status(500);
    }
});

app.get(`/findStudent`, (req, res) => {
    try{
        return res.status(200).json("test findStudent");
    }
    catch{
        return res.status(500);
    }
});

app.get(`/findCourse`, (req, res) => {
    try{
        return res.status(200).json("Test findCourse");
    }
    catch{
        return res.status(500);
    }
});

app.post(`/addCourse`, (req, res) => {
    try{
        return res.status(200).json("Test addCourse");
    }
    catch{
        return res.status(500);
    }
});

app.post(`/addStudent`, (req, res) => {
    try{
        return res.status(200).json("Test addStudent");
    }
    catch{
        return res.status(500);
    }
});

