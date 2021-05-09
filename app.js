// Require modules
const express = require("express");
const bodyParser = require("body-parser");

// Create app
const app = express();

// Global Variables

// Set the view engine
app.set("view engine", "ejs");

// Use modules
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// Home Route
app.get("/", function(req, res){
  res.render("shopping")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.")
})
