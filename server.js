const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;




// Define middleware here
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
console.log("MongoDB connected");
console.log(process.env.MONGODB_URI)




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log("MongoDB connected");
  console.log(process.env.MONGODB_URI)
});
