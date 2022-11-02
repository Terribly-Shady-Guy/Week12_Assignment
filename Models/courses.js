const mongoose = require('mongoose')
const schema = mongoose.schema


const Course = new schema({
    courseInstructor: {
        type: String,
        require: true
    },
    courseCredits: {
        type: Number,
        require: true
    },
    courseID: {
        type: String,
        require: true
    },
    courseName: {
        type: String,
        require: true
    }
})

mongoose.model('Course', Course)