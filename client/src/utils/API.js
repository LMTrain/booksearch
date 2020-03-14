import axios from "axios";

const BASEURL = process.env.REACT_APP_BASEURL
const APIKEY = process.env.REACT_APP_APIKEY
// Export an object containing methods we'll use for accessing the Google Book API

export default { 
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  
  searchId: function(keyId) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + keyId);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Update the book with the given id
    updateBook: function(idd) {
      console.log("API ID", idd) 
      const id = idd._id;
      const noted = String(idd.note);
      console.log(noted)
      console.log(id)     
    return axios.put("/api/books/" + id, noted);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(currentAccount) {
    return axios.get(`/api/users/current/${currentAccount.userName}`);
  },
  // Update the user with the given id
  updateUser: function(id) {
    return axios.put("/api/users", id);
  },

  deleteUser: function(id) {    
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database.
  saveUser: function(newAccount) {
    return axios.post("/api/users", newAccount);
  },
  loginUser: function(userAccount) {
    return axios.post("/api/users/login", userAccount);
  }


  
};
