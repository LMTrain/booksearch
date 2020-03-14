import React, { Component } from "react";
import "./style.css";
import API from "../utils/API";
import Container from "../components/Container";
import { Card, CardHeader, CardBody, Button, Row, Col} from 'reactstrap';
import FavDetails from "../components/FavDetails";
import { Link } from "react-router-dom";




var mId ="";
var allUsersBooks = [];
// var userFavBooks = 0,
class Favorite extends Component {
    state = {
    book: {},
    userBooks: [],
    favBooks: [],
    userfavBooksCount: 0,
    showBook: [],
    detailsFavBook: [],
    showBookState: false,    
    showFavBooks: true,
    note: "",
    favId: "",
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
        this.setState({favBooks: [allUsersBooks]})        
        // console.log("THIS IS MID", mId)
        let booksFind = [];
        var userFavBooks = 0;
        for (let i = 0;  i < allUsersBooks.length; i++) {      
          if (allUsersBooks[i].bookmember === mId) {
              booksFind.push(allUsersBooks[i])
              userFavBooks = userFavBooks + 1;            
              this.setState({userBooks:booksFind, 
                            userfavBooksCount: userFavBooks,
                            showBookState: false,
                            showFavBooks: true
                          })
            }
          } 
      }
      )
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

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleFormSubmit = event => {   
    event.preventDefault();
    console.log(event)
    this.setState({note: this.state.note});
    this.addNote()
  };

  favDetailsSubmit = (id) => {  
    // Find the id in the state
    const favbook = this.state.userBooks.find((book) => book._id === id);
    // console.log("THIS IS FAVDATAIL", favbook) 
    this.setState({showBook: [favbook], 
                  detailsFavBook: [favbook],
                  favId: id, 
                  showBookState: true,
                  showFavBooks: false,
                  redirect: true
                })
          
  };

  backToFav = () => {   
    this.loadBooks();
  }

  addNote = (id) => {
    console.log(this.state.note)
    console.log(this.state.favId)  
    let bookNote = this.state.note
    API.updateBook({
      _id: this.state.favId,
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
    const {userfavBooksCount, showBookState, showBook, showFavBooks, favId} = this.state;
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
                <Button type="submit" onClick={this.props.renderRedirect} color="info" size="sm"><b>{userfavBooksCount}</b>{" "}Favorites</Button>{" "}    
                <Button type="submit" onClick={() => this.props.backToSearch()} color="info" size="sm">Add More Books</Button>{" "}
                <Link to="/"><Button type="submit" color="info" size="sm">Sign Out</Button></Link>
              </Col>
            </Row>
            { 
              showBookState === true &&
              showFavBooks !== true ? 
                <FavDetails
                  note={this.state.note}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}  
                  showBook={showBook}
                  favId={favId} 
                  favoriteSubmit={this.favoriteSubmit} 
                  backToFav={this.backToFav}
                  addNote={this.addNote} 
                  memberId={this.state.memberId}
                /> : [] 
            }       
            {showBookState === false &&
             showFavBooks === true &&
             this.state.userBooks.length ? (
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
                          <button id={book._id}type="submit" onClick={() => this.favDetailsSubmit(book._id)} className="btn btn-success">Detail</button>                         
                        </CardBody>                                                                
                      </Card>       
                  </Col>
                ))
              }
            </div>
            ) 
              : showBookState === false &&
                showFavBooks === true &&
                this.state.userfavBooksCount === 0 ?
                (<div>
                  <h5>No book(s) in your Favorites</h5>
                  <Button type="submit" onClick={() => this.props.backToSearch()} color="info" size="sm">Add More Books</Button>{" "}
                </div>
              ) : []
            
          }
          </Container>
        </Row>      
      </div>
    );
  }
}
        
               

export default Favorite;





