/*
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. 
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*
*  Name: Maham Waqar Student ID: 127044196 Date: 2023-01-20
*
*  Online (Cyclic) URL: https://curious-bat-pinafore.cyclic.app
/*
**/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Maham Waqar - 127044196");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);