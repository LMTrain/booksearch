import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
// import axios from "axios";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

let bookInfo =[]

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  
  componentDidMount () {
    this.searchById();
    // API.searchId(this.props.match.params.id)   
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }
   
  searchById = () =>{
    API.searchId(this.props.match.params.id)
    .then(res => 
      this.setState({ book: res.data })
      )      
      .catch(err => console.log(err));
  }

  render() {
    bookInfo.push(this.state.book)
    
    console.log(bookInfo)
    return (
     
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
        
              <h1>
                {[0].title} by {[0].authors}
              </h1>
              
            
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.book.description}
              </p>
            </article>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-2">
            <Link to="/search">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
