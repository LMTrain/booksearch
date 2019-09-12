const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookid: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  link: {type: String, required: true},
  thumbnail: {type: String },
  description: String,
  publisheddate: String,
  note: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
