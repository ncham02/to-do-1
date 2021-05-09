// Require modules
const express = require("express");
const bodyParser = require("body-parser");

// Create app
const app = express();

// Global Variables
let userItemList = [];
let userItemQuant = [];


// Set the view engine
app.set("view engine", "ejs");

// Use modules
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// Home Route
app.get("/", function(req, res){

  res.render("shopping", {
    userItemList: userItemList,
    userItemQuant: userItemQuant
  })
})

app.post("/", function(req, res){
  let userItem = req.body.userItem;
  let userQuant = req.body.userQuant;

  userItemList.push(userItem);
  userItemQuant.push(userQuant);
  res.redirect("/");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.")
})
