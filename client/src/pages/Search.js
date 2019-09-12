import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Details from "../components/Details";

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
    showBookState: false
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
    this.setState({showBook: [book], showBookState: true})
        
  }  

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);         
  };
  
  favoriteSubmit = (id) => {
    
    const book = this.state.books.find((book) => book.id === id);
    // console.log('fav Book', book)
    this.setState({showBook: [book], showBookState: false})
    let bookId = String(book.id)    
    let bookTitle = String(book.volumeInfo.title)    
    let bookAuthors = String(book.volumeInfo.authors)
    let bookLink = String(book.volumeInfo.infoLink)
    let bookThumbnail = String(book.volumeInfo.imageLinks.thumbnail)
    let bookDescription = String(book.volumeInfo.description)
    let bookNote = ""
    let bookDate = String(book.volumeInfo.publishedDate)
    this.state.favMessage = "Book saved successfully";
    

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

    const {showBookState, showBook} = this.state

    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For Books</h1>
          
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          {!showBookState ? <SearchResults books={this.state.books}
          favoriteSubmit={this.favoriteSubmit}         
          handleDetailsSubmit={this.handleDetailsSubmit}
          favMessage={this.state.favMessage}
          
          /> : <Details showBook={showBook}/>}       
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
