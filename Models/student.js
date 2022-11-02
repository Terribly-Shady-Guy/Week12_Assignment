const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Students = new Schema ({
    fname:
    {
        type: String,
        required: true
    },

    lname:
    {
        type: String,
        required: true
    },
    studentid:
    {
        type: Number,
        required: true
    }
});
mongoose.model("Students", Students);