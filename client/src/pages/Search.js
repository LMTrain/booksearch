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
    error: "",
    showBook: [],
    showBookState: false
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

  handleDetailsSubmit = (id) => {

  
    // Find the id in the state
    const book = this.state.books.find((book) => book.id === id);
    console.log('found Book', book)

    this.setState({showBook: [book], showBookState: true})


    // let booksArray = [...this.state.books]

    // let books = booksArray.filter(book => {
    //   return book.id === id;
    // });

    // this.setState({ books })
    
    // console.log({books});
    
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);         
  };

  
  favoriteSubmit = (id) => {
    console.log('id++++', id)
    // event.preventDefault();
    // console.log(event.target);
    // const id = event.target.id;
    // console.log('id: ', id);
    // Find the id in the state
    // const book = this.state.books.find((book) => book.id === id);
    // this.setState(book)
    let booksArray = [...this.state.books]

    let books = booksArray.filter(book => {
       return book.id === id;
    });
    // this.setState({ books })
    
    // // this.favoriteBook({ books }) 
    console.log({ books })
    console.log(books[0].volumeInfo.title)
    console.log(books[0].volumeInfo.authors)
    console.log(books[0].volumeInfo.infoLink)
    console.log(books[0].volumeInfo.imageLinks.thumbnail)
    console.log(books[0].volumeInfo.description)
    console.log(books[0].volumeInfo.publishedDate)
    API.saveBook({

      
    // "bookid" : "kingStePhenks",
    // "title" : "1922",
    // "author" : "Stephen King",
    // "link" : "http://books.google.com/books?id=Dc9cxQEACAAJ&dq=Stephen+King&hl=&source=gbs_api",
    // "thumbnail" : "http://books.google.com/books/content?id=Dc9cxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    // "description" : "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    // "publisheddate" : "2019-11-12",
    // "note" : "This is Stephen King"
        bookid: books[0].id || "default value",
        title: books[0].volumeInfo.title || "default value",
        author: books[0].volumeInfo.authors || "default value",
        link: books[0].volumeInfo.infoLink || "default value",
        thumbnail: books[0].volumeInfo.imageLinks.thumbnail || "default value",
        description: books[0].volumeInfo.description || "default value",
        publisheddate: books[0].volumeInfo.publishedDate || "default value",
      })
        .then(res => {console.log(res)})
        .catch(err => console.log(err));
  

   
    
  };



    // console.log(book.title);
    
  

  // favoriteBook = event => {
  //   console.log(this.state.books)
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

  // }
 
  render() {
    console.log('this.state.showBook', this.state.showBook)

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
          // handleFormSubmit={this.handleFormSubmit}
          handleDetailsSubmit={this.handleDetailsSubmit}
          /> : <Details showBook={showBook}/>}
          {/* <Details books={this.state.books}
          showDetail={this.state.showDetail}
          // favoriteSubmit={this.favoriteSubmit}
          // handleDetailsSubmit={this.handleDetailsSubmit}
          /> */}
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
