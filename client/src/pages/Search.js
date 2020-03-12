import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Details from "../components/Details";
import SearchBookImage from "../components/SearchBookImage";
// import { Redirect } from "react-router-dom";
import Favorite from "./Favorite";



class Search extends Component {
  
  state = {
    search: "",
    favMessage:"",
    id: "",
    memberId: this.props.userName,      
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
    showFavBooks: false,
    showSearchForm: true,
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
    this.setState({showBook: [book], 
                  detailsFavBook: [book], 
                  showBookState: true, 
                  showBookImage: false,
                  showSearchForm: false,
                  showFavBooks: false,
                  redirect: true
                })
          
  };
  

  renderRedirect = () => {
    this.setState({showBookState: false,
                    showBookImage: true,
                    showFavBooks: false,
                    showSearchForm: true,
                  });
    // if (this.state.redirect === true) {      
    //   return <Redirect to='/Favorite' memberId={this.state.memberId}/>
    // }
    this.showFavoriteBooks();
  };

  showFavoriteBooks = () => {
    this.setState({showFavBooks: true, 
                    showBookImage: false,
                    showSearchForm: false, 
                    showBookState: false
                  });
  };

  handleFormSubmit = event => {
    console.log(event)
    event.preventDefault();
    this.searchForBooks(this.state.search);
    console.log("THIS IS SEARCH", this.state.search)
    this.setState({showBookImage: false,
                    showBookState: false, 
                    showFavBooks: false
                  });
  };

  
  favoriteSubmit = (id) => {    
    const book = this.state.books.find((book) => book.id === id);   
    this.setState({showBook: [book], 
                    showFavBooks: false, 
                    showBookImage: false,
                    showSearchForm: true, 
                    showBookState: false
                  })
                  
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
    let bookMember = String(this.state.memberId)
  

    function truncateString(str, num) {    
      if (str.length > num && num > 3) {
              return str.slice(0, (num - 3)) + '...';
          } else if (str.length > num && num <= 3) {
              return str.slice(0, num) + '...';
          } else {
          return str;
      }    
    }

    bookAuthors = truncateString(bookAuthors, 22); 
    bookDescription = truncateString(bookDescription, 1780);
    bookTitle = truncateString(bookTitle, 40); 

    API.saveBook({
      bookid: bookId,
      bookmember: bookMember,
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

  backToSearch = () => {
    this.setState({showFavBooks: false, 
                    showBookImage: false,
                    showSearchForm: true, 
                    showBookState: false
                  });
  }
 
  render() {   
    const {showBookState, showBook, showBookImage, showFavBooks, showSearchForm} = this.state
    console.log("THIS IS SHOWBOOKSTATE STATUS", !showBookState)
    return (      
      <div>
       
        <Container style={{ minHeight: "100%", width: "100%" }}>          
          
          { showBookImage === true && 
            showBookState === false && 
            showFavBooks === false &&
            showSearchForm === true ? 
            <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange} 
              renderRedirect={this.renderRedirect}
              memberId={this.state.memberId}           
            /> : []
          }
                   
          { !showBookState && 
            showFavBooks === false &&
            showBookImage === false &&
            showSearchForm === true ?
            
              <SearchResults 
                books={this.state.books === undefined ? [] : this.state.books}
                favoriteSubmit={this.favoriteSubmit}         
                handleDetailsSubmit={this.handleDetailsSubmit}
                memberId={this.state.memberId}          
              /> : [] 
                    
          }
        

          { showBookImage === false && 
            showBookState === true && 
            showFavBooks === false &&
            showSearchForm === false ? 
            <Details 
              showBook={showBook} 
              favoriteSubmit={this.favoriteSubmit} 
              backToSearch={this.backToSearch} 
              memberId={this.state.memberId}
            /> : [] 
          }
          
          {showBookImage === false ? [] : <SearchBookImage />}         
         
        </Container>
        { showBookImage === false && 
          showBookState === true && 
          showFavBooks === true &&
          showSearchForm === false ? 
          <Favorite 
            memberId={this.state.memberId}
          /> : []
        }

      </div>
      
    );
  }
}

export default Search;
