// Dependencies
// =============================================================
const cast = require('./cast');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Handle the "add" route
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(cast.characters);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:character?", function(req, res) {
  const chosen = req.params.character;

  if (chosen) {
    console.log(chosen);
    res.json(cast.find(chosen) || false);
    
  }
  else res.json(cast.characters);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body is equal to the JSON data sent with the post request
  // This is what the body-parser middleware does for us
  console.log(req.body);
  cast.add(req.body);
  res.json(req.body);
});

module.exports = app;