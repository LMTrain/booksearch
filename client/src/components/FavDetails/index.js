import React from "react";
import { Row, Col} from 'reactstrap';
import "./style.css";



function FavDetails(props) { 
  // console.log("THIS IS DETAILS PROPS", props)
  console.log("THIS IS FAV ID PROPS", props.favId);  
 
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
              <span style={{ marginLeft: 80 }}><button type="submit" onClick={() => props.backToFav()} className="btn btn-success">Back To Favorites</button>{" "}</span>
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
                    <button 
                      type="submit" 
                      onClick={props.handleFormSubmit} 
                      className="btn btn-success">
                      <span> Save Note</span>
                    </button>
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
