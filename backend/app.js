const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongodb = require("mongodb").MongoClient;


const app = express();

app.use(cors());

app.use(bodyparser.json());

var db;

mongodb.connect("mongodb+srv://gowtham:gowtham@cluster0.5yuf2.mongodb.net/?retryWrites=true&w=majority", (error, database)=>{
    if(!error)
    {
        db = database.db("stucor");
        console.log("Database Connection Successfull");
    }
    else{
        console.log(error);
        console.log("Database Connection Failed");
    }
});

app.post("/register", (req, res)=>{
    console.log(req.body);

    req.body._id = new Date().getTime();

    db.collection("users").insertOne(req.body, (error, data)=>{
        if(error)
        {
            console.log(error);
            res.status(403).json("Error in insert query");
        }
        else{
            res.json("User Registered Successfully!");
        }
    });
});

app.post("/login", (req, res)=>{
    db.collection("users").find(req.body, {projection : {_id : 1, username : 1}}).toArray((error, data)=>{
        var token = '';

        if(data.length > 0)
        {
            token = jwt.sign(data[0], "myseckey");
        }
        res.json(token);
    });
});




module.exports = app;