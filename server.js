const express = require('express');
const path = require('path');
require('dotenv').config();
const ejs = require('ejs')
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views")

//define route for web
const homeRoute = require('./route/web');
app.use(homeRoute);

//define route for api

const apiRoute = require('./route/apiRoute');
app.use('/api', apiRoute);

//connect mongodb
const dbDriver = "mongodb+srv://project2:Dpa7Bryv0MsqswwJ@cluster0.vkoaxyo.mongodb.net/crud"
//const dbcon = "mongodb+srv://nodejs_augest:N7E6pikonOIh3LTC@cluster0.07orwdf.mongodb.net/crud"
//const dbcon = "mongodb+srv://souvik29saha@gmail.com:Souvik@123@cluster0.3jmkvq8.mongodb.net/crud"
const port = process.env.PORT || 2000;

mongoose.connect(dbcon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server is running port at http://localhost:${port}`);
            console.log(`database connection successfully`);
        })
    }).catch(error => {
        console.log(error);
    })
