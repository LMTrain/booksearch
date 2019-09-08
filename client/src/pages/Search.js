import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
// import { List } from "../components/List";
// import { Link } from "react-router-dom";


class Search extends Component {
  state = {
    search: "",
    id: "",      
    books: [],    
    error: ""
  };
  
  searchForBooks = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  }

  searchById = keyId => {
    API.search(keyId)
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

  handleDetailSubmit = event => {
    event.preventDefault();
    this.searchById(this.state.id);         
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);         
  };

    
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
          handleFormSubmit={this.handleFormSubmit}
          />
         
        </Container>
      </div>
      
    );
  }
}

export default Search;
