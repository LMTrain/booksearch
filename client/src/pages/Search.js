import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Details from "../components/Details";
import SearchBookImage from "../components/SearchBookImage";
import { Redirect } from "react-router-dom";


class Search extends Component {
  state = {
    search: "",
    favMessage:"",
    id: "",      
    books: [],    
    title: "",
    authors: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",           
    error: "",
    showBook: [],
    detailsFavBook: [],
    showBookState: false,
    showBookImage: true,
    redirect: false,
  };
  
  searchForBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))         
      .catch(err => console.log(err));
  }  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleDetailsSubmit = (id) => {  
    // Find the id in the state
    const book = this.state.books.find((book) => book.id === id);
    // console.log('found Book', book)
    this.setState({showBook: [book], detailsFavBook: [book], showBookState: true, showBookImage: false, redirect: true})
    // this.props.bookDetails(this.state.showBook)       
  };

  // bookDetails = () => {

  // }
  renderRedirect = () => {
    if (this.state.redirect) {      
      return <Redirect to='/BookDetails' showBook={this.state.showBook}/>
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);
    this.setState({showBookImage: false});
  };
  
  favoriteSubmit = (id) => {
    // var bookThumbnail =" "
    const book = this.state.books.find((book) => book.id === id);   
    this.setState({showBook: [book], showBookState: false})
    // console.log("FAV BOOK", book)
    // console.log("IMAGE URL", book.volumeInfo.imageLinks)

     if (book.volumeInfo.imageLinks === undefined) {
      var bookThumbnail = 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg'
    } else {
      bookThumbnail = String(book.volumeInfo.imageLinks.thumbnail)
    }

    if (book.volumeInfo.description === undefined) {
      var bookDescription = 'This book does not include a brief summary'
    } else {
      bookDescription = String(book.volumeInfo.description)
    }

    if (book.volumeInfo.publishedDate === undefined) {
      var bookDate = '2020'
    } else {
      bookDate = String(book.volumeInfo.publishedDate)
    }

    let bookId = String(book.id)    
    let bookTitle = String(book.volumeInfo.title)    
    let bookAuthors = String(book.volumeInfo.authors)
    let bookLink = String(book.volumeInfo.infoLink)
    let bookNote = ""
  

    function truncateString(str, num) {    
      if (str.length > num && num > 3) {
              return str.slice(0, (num - 3)) + '...';
          } else if (str.length > num && num <= 3) {
              return str.slice(0, num) + '...';
          } else {
          return str;
      }    
    }

    bookDescription = truncateString(bookDescription, 1780);
    bookTitle = truncateString(bookTitle, 40);
   
    
    

    API.saveBook({
      bookid: bookId,
      title: bookTitle,
      authors: bookAuthors,
      link: bookLink,
      thumbnail: bookThumbnail,
      description: bookDescription,
      note: bookNote,
      publisheddate: bookDate,
    })
      .then(res => {console.log(res)})
      .catch(err => console.log(err));  
    
  };

 
  render() {
    // console.log('this.state.showBook', this.state.showBook)
    const {showBookState, showBook, showBookImage} = this.state

    return (
      <div>
        {/* {this.renderRedirect()} */}
        <Container style={{ minHeight: "80%", width: "100%" }}>
          <h3 className="text-center">Search For Books</h3>
          
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          
          {!showBookState ? <SearchResults books={this.state.books === undefined ? [] : this.state.books}
          favoriteSubmit={this.favoriteSubmit}         
          handleDetailsSubmit={this.handleDetailsSubmit}
          
          
          /> : <Details showBook={showBook}/>}
          {showBookImage == false ? [] : <SearchBookImage />}
          {/* <div>
            <img className='image'
              alt="" width="1050" height="700" position="relative"
              src={showBookImage == true ? "https://lmtrain.github.io/lm-images/assets/images/books2.jpg" : null}
              />
          </div>        */}
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
