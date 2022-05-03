const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

const User = require("./models/users")

//middleware
app.use(bodyParser.json());
app.use(cors());

//connect database => mongoose.connect


//create middleware zodat enkel ingelogde users de verhalen kunnen zien
//met webtoken, opslaan in localstorage?
//isTokenvalid


//create user route => app.post("/register", (req; res)=>{..........})

//login route

//get verhalen, alleen als user is ingelogd....



app.listen(port, ()=>{
    console.log("listening....")
})