import React from "react";
import "./style.css";
import { Card, CardHeader, CardBody, Row, Col, Button} from 'reactstrap';

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
 
  return (
             
    <Row>
      <div className="book-row-display">        
          {props.books.map(result => (   
            <Col key={result.etag} md="3">
                <Card className="book-card">
                    <CardHeader className="book-card-header"><b>Title :</b> {result.volumeInfo.title = truncateString(result.volumeInfo.title, 40)} </CardHeader>
                    <div className="img-container">
                    <img 
                      alt={result.volumeInfo.title} width="40" height="80" 
                      src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} 
                      />
                    </div>
                    <CardBody className="content">                      
                      <b>Authors         :</b> {result.volumeInfo.authors}
                      <br></br>
                      <b>Published Date :</b> {result.volumeInfo.publishedDate}
                    </CardBody>
                  
                  <span className="card-button">
                    <div className="card-button">
                      <p onClick={() => props.handleDetailsSubmit(result.etag)}>Details</p>
                    </div>
                    <div className="card-button">
                      {/* <button id={result.etag} type="submit" onClick={() => props.favoriteSubmit(result.id)} className="btn btn-success">Add to Favorite</button> */}
                      { props.memberId === null || props.memberId === undefined ? [] :
                        <>
                          <p  
                            onClick={() => props.favoriteSubmit(result.etag)}>Add to Favorite
                          </p>    
                        </>
                      }
                    </div>
                  </span>
                </Card>
              </Col>
            ))} 
      </div>
    </Row>      
    
  );
  
}



export default SearchResults;
