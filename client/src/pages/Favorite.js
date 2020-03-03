import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import moment from 'moment';



var favBooks = []
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

  loadFavBooks = () => {
    favBooks = this.state.book;
    console.log("THIS IS FAVBOOKS", favBooks);
    this.renderDetailModal(favBooks);
  }

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

  
  editNote = id => {
    const bookNote = this.state.book.find((noteBook) => noteBook.id === id);   
    this.setState({favBookNote: [bookNote]})
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

  renderDetailModal(favBooks) {     
    const { isOpen, toggle} = this.state
    return favBooks.map((book, index) => {
      return (
        <Col key={index} md="4">
          <p><b>Title: </b>{book.title}</p>
        
        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{book.title}</ModalHeader>
            <ModalBody>
              <p><b>Title: </b>{book.title}</p>
              <p><b>Authors: </b>{book.authors}</p>
              <p><b>Published Date: </b>{book.publisheddate}</p>
              <p><b>Description: </b>{book.description}</p>
              <p><b>Note: </b>{book.note}</p>
              {/* <p><b>Date added to Fav: </b>{moment(book.date).format('MMMM YYYY')}</p>                 */}
            </ModalBody>
            <ModalFooter>                
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
        </Col>
      )
    })  
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
                    <span onClick={this.loadFavBooks}>                  
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
                          {/* <span>
                          <form className="note">
                            <div className="form-group">
                              <label htmlFor="note"></label>
                              <input value={this.state.book.note} name="note" type="text" className="form-control" placeholder="Add a note " id="note"
                              />        
                              <button key={book._id} type="submit" onClick={() => this.handleNoteSubmit(book._id)} className="btn btn-success">Save</button>
                            </div>      
                          </form>
                        </span> */}
                        </CardBody>
                        <span>
                          <Button key={book._id} type="submit" onClick={() => this.deleteBook(book._id)} color="danger" size="sm">Delete</Button>
                          <Button key={book._id} type="submit" onClick={() => this.editNote(book._id)} color="info" size="sm">Edit Note</Button>
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





