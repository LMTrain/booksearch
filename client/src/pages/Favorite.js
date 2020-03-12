import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
// import NoteForm from "../components/NoteForm";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
import { Link } from "react-router-dom";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import moment from 'moment';



var mId ="";
var allUsersBooks = [];
// var userFavBooks = 0,
class Favorite extends Component {
    state = {
    book: {},
    userBooks: [],
    favBooks: [],
    userfavBooksCount: 0,
    note: "",
    memberId: this.props.memberId,
    isOpen: false   
  };
 
  componentWillMount() { 
    mId = this.state.memberId 
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {        
        this.setState({ book: res.data, id: "", title: "", authors: "", link: "", thumbnail: "", description: "", publisheddate: "", note: "",})
        
        allUsersBooks = [...res.data]
        console.log("THIS IS ALLUSERSBOOKS", allUsersBooks)
        this.setState({favBooks: [allUsersBooks]})
        console.log("THIS IS STATE FAV BOOKS", this.state.favBooks)
        console.log("THIS IS MID", mId)
        let booksFind = [];
        var userFavBooks = 0;
        for (let i = 0;  i < allUsersBooks.length; i++) {      
          if (allUsersBooks[i].bookmember === mId) {
              booksFind.push(allUsersBooks[i])
              userFavBooks = userFavBooks + 1;            
              this.setState({userBooks:booksFind, userfavBooksCount: userFavBooks})
            }
          }          
          console.log("THIS IS USERSBOOKS", this.state.userBooks) 
        
      }
      )      
      // console.log("THIS IS FAVBOOKS", this.state.book)
      .catch(err => console.log(err));
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
    event.preventDefault();
  };

  addNote = (id) => {
    console.log(this.state.note)
    console.log("THIS IS ID", id)
    let bookNote = this.state.note
    API.updateBook({
      _id: id,
      note: bookNote      
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err)); 
  };

  
  editNote = (id) => {
    const bookNote = this.state.book.find((bookNote) => bookNote._id === id);  
    console.log("FAV BOOK", bookNote)
    
    
  }
  
  deleteBook = id => {
    console.log(id)
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };  
  
  

  render() { 
    const {userfavBooksCount} = this.state;
    return (
      <div>
       
        <Row> 
          <Row>
            <Col>
              <h3 className="text-center">My Favorite Books</h3> 
            </Col>
          </Row>
          <Container> 
            <Row>
              <Col className="fav-menu-bar">
    <Button color="info" size="sm" onClick={this.props.renderRedirect} ><b>{userfavBooksCount}</b>{" "}Favorites</Button>{" "}    
              <Button type="submit" onClick={() => this.props.backToSearch()} color="info" size="sm">Add More Books</Button>{" "}
              <Link to="/"><Button type="submit" color="info" size="sm">Sign Out</Button></Link>
              </Col>
            </Row>       
              {this.state.userBooks.length ? (
                <div className="book-row-display">
                  {this.state.userBooks.map(book => (
                    <Col key={book._id} md="3">                  
                      {/* <span onClick={() => this.loadFavBooks(book._id)}> */}
                        <Card className="book-card">                    
                          <CardHeader className="book-card-header">
                            <Row>
                              <Col md="10">
                                <b>Title :</b> {book.title}
                              </Col>
                              <Col md="2">
                              <span className="delete-button">
                            <span onClick={() => this.deleteBook(book._id)}><b>X</b></span>
                              {/* <Button type="submit" onClick={() => this.deleteBook(book._id)} color="danger" size="sm">X</Button> */}
                            </span>
                              </Col>
                            </Row>
                            
                            
                          </CardHeader>
                          <div className="img-container">
                          <img
                            alt={book.title} width="130" height="160"
                            src={book.thumbnail}
                          />
                          </div>
                          <CardBody className="content"> 
                            <p><b>Authors :</b>{" "}{book.authors}</p>
                            <p><b>Published Date :</b> {book.publisheddate}</p>
                            <p>{book.bookmember}</p>                        
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
                            {/* <NoteForm                            
                              note={this.state.note}
                              handleFormSubmit={this.handleFormSubmit}
                              handleInputChange={this.handleInputChange}            
                            /> */}
                          </span>

                          </CardBody>
                          <span>                         
                            {/* <Button type="submit" onClick={() => this.deleteBook(book._id)} color="danger" size="sm">Delete</Button> */}
                            {/* <Button type="submit" onClick={() => this.editNote(book._id)} color="info" size="sm">Add Note</Button> */}

                          </span>                                       
                        </Card>                                          
                      {/* </span>                        */}
                    </Col>
                  ))}
                </div>
                    ) : (
                      <h5>Loading...</h5>
                    )}
          </Container>
        </Row>      
      </div>
      );
    }
  }
        
               

export default Favorite;





