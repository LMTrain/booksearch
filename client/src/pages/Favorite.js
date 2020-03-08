import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
import NoteForm from "../components/NoteForm";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import moment from 'moment';



var favBookNote = []
class Favorite extends Component {
  state = {
    book: {},
    favBooks: [],
    favBookNote: [],
    note: "",
    isOpen: false   
  };
  // this.state.handleToggle  = this.handleToggle.bind(this);
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
      // console.log("THIS IS FAVBOOKS", favBooks)
      .catch(err => console.log(err));
  };

  loadFavBooks = (id) => {
    const bookNote = this.state.book.find((bookNote) => bookNote._id === id);
    // // console.log('fav Book', book)
    // this.setState({ favBookNote : bookNote})
    // favBookNote = this.state.favBookNote;
    console.log("THIS IS DATE")
    favBookNote = bookNote    
    console.log("THIS IS FAVBOOKS", favBookNote);
    console.log("THIS IS BOOK ID", favBookNote._id )
    this.renderDetailModal();
  };
    

  handleInputChange = event => {
    const note = event.target.name;
    const value = event.target.value;
    console.log(note)
    console.log(value)
    this.setState({
      [note]: value
    });
   
  };

  handleFormSubmit = event => {
    console.log(event)
    event.preventDefault();
    this.addNote(favBookNote._id);
    console.log("THIS IS NOTE", this.state.note)
    // this.setState({note : value})    
    // this.addNote(id);
  };

  addNote = (id) => {
    console.log(this.state.note)
    console.log("THIS IS ID", id)
    let bookNote = String(this.state.note)
    API.updateBook({
      _id: id,
      note: bookNote,      
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err)); 
  };

  
  editNote = (id) => {
    const bookNote = this.state.book.find((bookNote) => bookNote._id === id);  
    console.log("FAV BOOK", bookNote)
    
    
  }
  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  
  handleToggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }

  renderDetailModal() {
    
    console.log("THIS IS favBookNote", favBookNote);    
  }    

  render() {    
    return (
      <div>
        <Container>
        <Row>
          <Col>
            <h3 className="text-center">My Favorite Books</h3> 
          </Col>
        </Row>
        <Row>                   
            {this.state.book.length ? (
              <div className="book-row-display">
                {this.state.book.map(book => (
                  <Col key={book._id} md="4">
                   {/* <span> */}
                    <span onClick={() => this.loadFavBooks(book._id)}>                  
                      {/* <BookCardDetail toggle={this.handleToggle} book={book} isOpen/> */}
                      <Card className="book-card">                    
                        <CardHeader className="book-card-header"><b>Title :</b> {book.title}</CardHeader>
                        <div className="img-container">
                        <img
                          alt={book.title} width="130" height="160"
                          src={book.thumbnail}
                        />
                        </div>
                        <CardBody className="content"> 
                          <p><b>Authors :</b>{book.authors}</p>
                          <p><b>Published Date :</b> {book.publisheddate}</p>                         
                          <span>
                          {/* <form className="note">
                            <div className="form-group">
                              <label htmlFor="note"></label>
                              <input
                                value={this.state.note}
                                onChange={this.state.handleInputChange}
                                name="note" 
                                type="text" 
                                className="form-control" 
                                placeholder="Add a note " 
                                id="note"
                              />        
                              <button                                
                                type="submit" 
                                onClick={() => this.handleNoteSubmit()} 
                                className="btn btn-success">
                                Save
                              </button>
                            </div>      
                          </form> */}
                          <NoteForm                            
                            note={this.state.note}
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}            
                          />
                        </span>

                        </CardBody>
                        <span>                         
                          <Button type="submit" onClick={() => this.deleteBook(book._id)} color="danger" size="sm">Delete</Button>
                          <Button type="submit" onClick={() => this.editNote(book._id)} color="info" size="sm">Add Note</Button>

                        </span>                                       
                      </Card>                                          
                    </span>                       
                  </Col>
                ))}
              </div>
                  ) : (
                    <h2>Loading...</h2>
                  )}
           
        </Row>      
        </Container>
      </div>
      );
    }
  }
        
               

export default Favorite;





