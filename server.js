const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;
// const server = require('http').createServer(app);



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

// const uri = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
// );
// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("MongoDB connected");
// })
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
