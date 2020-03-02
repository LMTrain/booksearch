import React from "react";
import "./style.css";
import { Card, CardHeader, CardBody, Row, Col} from 'reactstrap';

function truncateString(str, num) {    
  if (str.length > num && num > 3) {
          return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
          return str.slice(0, num) + '...';
      } else {
      return str;
  }    
}



function SearchResults(props) {
  
  console.log("SEARCH RESULTS", props)
  return (
             
    <Row>
      <div className="book-row-display">        
          {props.books.map(result => (   
            <Col key={result.etag} md="4">
                <Card className="book-card">
                    <CardHeader className="book-card-header"><b>Title :</b> {result.volumeInfo.title = truncateString(result.volumeInfo.title, 40)} </CardHeader>
                    <div className="img-container">
                    <img 
                      alt={result.volumeInfo.title} width="130" height="160" 
                      src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} 
                      />
                    </div>
                    <CardBody className="content">                      
                      <b>Authors         :</b> {result.volumeInfo.authors = truncateString(result.volumeInfo.authors, 10)}
                      <br></br>
                      <b>Published Date :</b> {result.volumeInfo.publishedDate}
                    </CardBody>
                  
                  <span>
                    <button id={result.etag}type="submit" onClick={() => props.handleDetailsSubmit(result.id)} className="btn btn-success">Detail</button>  
                   
                    <button id={result.etag} type="submit" onClick={() => props.favoriteSubmit(result.id)} className="btn btn-success">Add to Favorite</button>
                  </span>
                </Card>
              </Col>
            ))} 
      </div>
    </Row>      
    
  );
  
}



export default SearchResults;
