const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  link: {type: String, required: true},
  thumbnail: {type: String },
  summary: {type: String, required: true},
  publisheddate: {type: String },
  note: { type: String},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
