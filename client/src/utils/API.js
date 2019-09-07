import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&maxResults=40&orderBy=newest&key=AIzaSyD5c7Uuj4hd7FPRO9A9o4zhWaCTsffKrNc";
// Export an object containing methods we'll use for accessing the Google Book API

export default { 
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
