import React, { Component } from "react";
// import API from "../utils/API";
import Card from "../components/Card";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Favorite extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    link: "",
    thumbnail: "",
    description: "",
    publisheddate: "",
  };

  // When the component mounts, get a list of all Favorite books in DB and update this.state.
  componentDidMount() {
    this.loadBooks();    
    console.log(this.state);
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log('LOADBOOKS', res)
        this.setState({ books: res.data})
      }
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  favoriteSubmit = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.result.volumeInfo.title,
      authors: this.state.result.volumeInfo.authors,
      link: this.state.result.volumeInfo.infoLink,
      thumbnail: this.state.result.volumeInfo.imageLinks.thumbnail,
      description: this.state.result.volumeInfo.description,
      publisheddate: this.state.result.volumeInfo.publishedDate,

    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <h1 className="text-center">Favorite Books</h1>
        <h3 className="text-center">
          List of my favorite books!
        </h3>
        {this.state.books.map(book => (
             
          <Card             
          id={book._id}
          key={book._id}
          title={book.title}
          authors={book.authors} 
          link={book.link}          
          thumbnail={book.thumbnail}
          description={book.description}
          publisheddate={book.publisheddate}
          note={book.note}
          date={book.date}        
          />
        ))}
        <SearchResults books={this.state.books}
          favoriteSubmit={this.favoriteSubmit}
        />         
      </div>
    );
  }
}

export default Favorite;
