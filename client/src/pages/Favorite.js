import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import "./style.css";
import API from "../utils/API";



class Favorite extends Component {
  state = {
    book: {},
   
  };

  // When the component mounts, get a list of all Favorite books in DB and update this.state.
  componentDidMount() {  
    this.loadBooks();    
    
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {        
        this.setState({ book: res.data, id: "", title: "", author: "", link: "", thumbnail: "", description: "", publisheddate: "", note: "",})
      }
      )
      .catch(err => console.log(err));
  };

  handleNoteSubmit = event => {
    event.preventDefault();
    this.addNote(this.state.book.note);         
  };

  addNote = (id) => {
    const book = this.state.book.find((book) => book.id === id);
    console.log('fav Book', book)
    this.setState({ book })
    let bookNote = String(this.state.book.note)
    API.updateBook({
      note: bookNote,      
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err)); 
  };

  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  

  render() {
    
    return (
      <div>
        <h1 className="text-center">My Favorite Books</h1>        
        <div>
          
          {this.state.book.length ? (
                <List>
                  {this.state.book.map(book => (
                    <ListItem>
                      <span>
                          <form className="note">
                            <div className="form-group">
                              <label htmlFor="note">Note:</label>
                              <input value={this.state.book.note} name="note" type="text" className="form-control" placeholder="Add a note " id="note"
                              />        
                              <button id={book._id}type="submit" onClick={() => this.handleNoteSubmit(book._id)} className="btn btn-success">Add Note</button>
                            </div>      
                          </form>
                        </span>
                      <div className="card">
                        <div className="img-container">
                        <img
                          alt={book.title} width="150" height="250"
                          src={book.thumbnail}
                        />
                        </div>
                        <div className="content">
                          <ul>
                            <li>
                              <b>Title :</b> {book.title}
                            </li>
                            <li>
                              <b>Authors :</b>{book.author}
                            </li>
                            <li>
                              <b>Published Date :</b> {book.publishedDate}<span>||</span><span><b>Preview :</b> <a href={book.link} target="_blank" rel="noopener noreferrer">Link</a></span>
                            </li>
                          </ul>
                        </div>
                        
                      </div> 
                      <span><button id={book._id}type="submit" onClick={() => this.deleteBook(book._id)} className="btn btn-success">Remove</button></span>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h4>...Loading</h4>
              )}
        </div>
        
      </div>
    );
  }
}

export default Favorite;





