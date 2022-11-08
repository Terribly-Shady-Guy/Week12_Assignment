const express = require("express");
const app = express();
const PORT = 1200;
app.use(express.json());

const nodemon = require("nodemon");

const mongoose = require("mongoose");

// const connectionString = "mongodb+srv://admin:db1212@group4a4db.d6cdj1h.mongodb.net/?retryWrites=true&w=majority";
const connectionString = "mongodb+srv://admin:db1212@kaufmannweek12.niqst3i.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "db connection error"));
db.once("open", () => console.log("connected to database successfully"));


//put code to get db schema here
require("./Models/students.js");
const Student = mongoose.model("Student");

require("./Models/courses.js");
const Course = mongoose.model("Course");

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));

app.get(`/getAllCourses`, async (req, res) => {
    try{
        let courses = await Course.find({}).lean()
        return res.status(200).json(courses);
    }
    catch{
        return res.status(500);
    }
});

app.get(`/getAllStudents`, async (req, res) => {
    try{
        let students = await Student.find({}).lean()
        return res.status(200).json(students);
    }
    catch{
        return res.status(500);
    }
});

app.get(`/findStudent`, async (req, res) => {
    try{
        let student = await Student.findOne({studentID: req.body.studentID})

        if (student) {
            return res.status(200).json(student);
            
        } 
        else {
            return res.status(200).json("Student not Found...")            
        }
    }
    catch{
        return res.status(500).json("Connection ERROR...")
    }
});

app.get(`/findCourse`, async (req, res) => {
    try{
        let course = await Course.find({courseInstructor: req.body.courseInstructor})

        if (course) {
            return res.status(200).json(course);
            
        } 
        else {
            return res.status(200).json("Course not Found...")            
        }
    }
    catch{
        return res.status(500).json("Connection ERROR...")
    }
});

app.post(`/addCourse`, (req, res) => {
    try{
        let course = {
            courseInstructor: req.body.courseInstructor,
            courseCredits: req.body.courseCredits,
            courseID: req.body.courseID,
            courseName: req.body.courseName
        }

        Course(course).save().then(() => {
            return res.status(200).json("Course Added...")
        })
    }
    catch{
        return res.status(500);
    }
});

app.post(`/addStudent`, (req, res) => {
    try{
        let student = {
            fname: req.body.fname,
            lname: req.body.lname,
            studentID: req.body.studentID
        }

        Student(student).save().then(() => {
            return res.status(200).json("Student Added...")
        })
    }
    catch{
        return res.status(500);
    }
});

app.put("/editStudentById", async (req, res) => {
    try {
        let student = await Student.updateOne({_id: req.body.id}, {
            fname: req.body.fname
        });

        if (student) {
            res.status(200).send("Student first name updated");
        }
        else {
            res.status(200).send("No change on student data");
        }
    }
    catch {
        res.status(500).send("db error");
    }
});

app.put("/editStudentByFname", async (req, res) => {
    try {
        let student = await Student.updateOne({fname: req.body.fname}, {
            fname: req.body.fnameNew, 
            lname: req.body.lname
        });
        
        if (student) {
            res.status(200).send("student name updated");
        }
        else {
            res.status(200).send("student name was not updated");
        }
    }
    catch {
        res.status(500).send("db error");
    }
});

app.put("/editCourseByCourseName", async (req, res) => {
    try {
        let course = await Course.updateOne({courseName: req.body.courseName}, {
            courseInstructor: req.body.courseInstructor
        });

        if (course) {
            res.status(200).send("course instructor updated");
        }
        else {
            res.status(200).send("course instructor not updated");
        }
    }
    catch {
        res.status(500).send("db error");
    }
});