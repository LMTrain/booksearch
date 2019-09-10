import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Details from "../components/Details";

class Search extends Component {
  state = {
    search: "",
    id: "",      
    books: [],    
    title: "",
    author: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",           
    error: ""
  };
  
  searchForBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))     
      .catch(err => console.log(err));
  }

  // searchById = keyId => {
  //   API.search(keyId)
  //     .then(res => this.setState({ books: res.data.items }))
  //     .catch(err => console.log(err));
  // }

  // bookSaved = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data.items })
  //       )
  //       .catch(err => console.log(err));   
    
  // };

  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleDetailsSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const id = event.target.id;
    console.log('id: ', id);
    // Find the id in the state
    // const book = this.state.books.find((book) => book.id === id);
    let booksArray = [...this.state.books]

    let books = booksArray.filter(book => {
      return book.id === id;
    });

    this.setState({ books })
    
    // console.log({books});
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);         
  };

  
  favoriteSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const id = event.target.id;
    console.log('id: ', id);
    // Find the id in the state
    // const book = this.state.books.find((book) => book.id === id);
    let booksArray = [...this.state.books]

    let books = booksArray.filter(book => {
      return book.id === id;
    });
    this.setState({ books })
    
    this.favoriteBook({ books }) 
    console.log({ books })
    // console.log(books.volumeInfo.title)
  };



    // console.log(book.title);
    
  

  favoriteBook = event => {
    console.log(this.state.books)
    // API.saveBook({
    //   bookid: this.state.books.id,
    //   title: this.state.books.title,
    //   author: this.state.books.authors,
    //   link: this.state.books.infoLink,
    //   thumbnail: this.state.books.imageLinks.thumbnail,
    //   description: this.state.books.description,
    //   publisheddate: this.state.books.publishedDate,
    // })
    //   .then(res => this.bookSaved())
    //   .catch(err => console.log(err));

  }
 
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For Books</h1>
          
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}            
          />
          <SearchResults books={this.state.books}
          favoriteSubmit={this.favoriteSubmit}
          // handleFormSubmit={this.handleFormSubmit}
          handleDetailsSubmit={this.handleDetailsSubmit}
          />
          <Details books={this.state.books}
          favoriteSubmit={this.favoriteSubmit}
          // handleDetailsSubmit={this.handleDetailsSubmit}
          />
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
