const express = require("express");
const app = express();
const PORT = 1200;

const nodemon = require("nodemon");

const mongoose = require("mongoose");

const connectionString = "mongodb+srv://admin:db1212@group4a4db.d6cdj1h.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "db connection error"));
db.once("connect", () => console.log("connected to database successfully"));

//put code to get db schema here
app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));