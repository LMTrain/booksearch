import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



class Favorite extends Component {
  state = {
    book: {},
   
  };
//HERE IS JUST TO TYPE FOR GITHUB
  // When the component mounts, get a list of all Favorite books in DB and update this.state.
  componentWillMount() {  
    this.loadBooks();    
    
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {        
        this.setState({ book: res.data, id: "", title: "", authors: "", link: "", thumbnail: "", description: "", publisheddate: "", note: "",})
      }
      )
      .catch(err => console.log(err));
  };

  handleNoteSubmit = event => {
    event.preventDefault();
    this.addNote(this.state.book.note);         
  };

  addNote = (id) => {
    const book = this.state.book.find((book) => book._id === id);
    // console.log('fav Book', book)
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
        <h3 className="text-center">My Favorite Books</h3>        
        <div className="result-box">
          
          {this.state.book.length ? (
                <ul className="list-group search-results">
                  {this.state.book.map(book => (
                    <li key={book._id} className="list-group-item">
                      <span>
                          <form className="note">
                            <div className="form-group">
                              <label htmlFor="note"></label>
                              <input value={this.state.book.note} name="note" type="text" className="form-control" placeholder="Add a note " id="note"
                              />       
                              <button key={book._id} type="submit" onClick={() => this.handleNoteSubmit(book._id)} className="btn btn-success">Add Note</button>
                            </div>      
                          </form>
                        </span>
                      <Row>
                        <Col size="md-4">
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
                                  <b>Authors :</b>{book.authors}
                                </li>
                                <li>
                                  <b>Published Date :</b> {book.publisheddate}
                                  {/* <span>||</span><span><b>Preview :</b> <a href={book.link} target="_blank" rel="noopener noreferrer">Link</a></span> */}
                                </li>
                              </ul>
                            </div>                        
                          </div> 
                          <span><button key={book._id} type="submit" onClick={() => this.deleteBook(book._id)} className="btn btn-success">Remove</button></span>
                        </Col>
                        <Col size="md-8">
                          <div className="detail-card">                            
                            <div className="content">
                              <ul>                                
                                <li>
                                  <b>Details :</b> {book.description}                                  
                                </li>
                              </ul>
                            </div>                        
                          </div> 
                        </Col>
                      </Row>
                      
                    </li>
                  ))}
                </ul>
              ) : (
                <h4>...Loading</h4>
              )}
        </div>
        
      </div>
    );
  }
}

export default Favorite;





