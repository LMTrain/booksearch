import React from "react";
import { Row, Col, Button} from 'reactstrap';
import "./style.css";



function FavDetails(props) {  
 
  return (
   
    <div>    
    <ul className="list-group search-favBooks">
      {props.showBook.map(favBook => (          
        <li key={favBook._id} className="list-group-item">
          <Row>
            <Col md="2">
              <img alt={favBook.title} width="200" height="220" className="img-fluid" src={favBook.thumbnail} /><span></span> 
            </Col>
            <Col md="3">
              <span style={{ marginLeft: 80 }}><Button type="submit" onClick={() => props.backToFav()} color="info" size="sm">Back To Favorites</Button>{" "}</span>
            </Col>
            <Col md="7">
              <form className="note">          
                <div className="note-form-group">
                  <label htmlFor="note"></label>
                  <input
                    value={props.note}
                    onChange={props.handleInputChange}
                    name="note"          
                    type="textarea"
                    className="form-control"
                    placeholder="Add a note to your book"
                    id="note"
                  />
                  <span>
                    <Button type="submit" onClick={props.handleFormSubmit} color="info" size="sm"><span> Save Note</span></Button>
                  </span>
                </div>          
              </form>
              <p><b>Note:</b>{" "}{favBook.note}</p>
            </Col>
          </Row>          
          {/* <span style={{ marginLeft: 80 }}><button id={props.FavId} type="submit" onClick={() => props.addNote()} className="btn btn-success">Save Note</button>{" "}</span>   */}
          
          <br></br>
          <p><b>Title             :</b> {favBook.title}</p>
          <p><b>Authors         :</b> {favBook.authors}</p>
          <p><b>Published Date :</b> {favBook.publishedDate}</p>
          <p><b>Description :</b> {favBook.description}</p>          
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default FavDetails;
