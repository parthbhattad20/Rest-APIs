//requiring packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//importing route
const postsRout = require("./routes/posts");

//setting the app to express
const app = express();

//using route
app.use(bodyParser.json());
app.use("/posts", postsRout);

app.get("/", (req, res) => {
    res.send("we are on home rout");
});

//connection to database
mongoose.connect(
    "mongodb://localhost:27017/RESTDB",
    { useNewUrlParser: true },
    () => {
        console.log("connected to the database");
    }
);

//listening to server
app.listen(3000, (req, res) => {
    console.log("server started at port 3000");
});
