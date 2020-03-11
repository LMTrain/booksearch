import React from "react";
import "./style.css";
import { Button } from 'reactstrap';


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) { 
  return (
   <>
    <span>
      <h3 className="text-center">Search For Books</h3>{props.memberId}
      <span>
        <form className="search">
          
          <div className="search-form-group">
            <label htmlFor="search"></label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="search"          
              type="text"
              className="form-control"
              placeholder="Search for Books or type a title"
              id="search"
            />
            <span>
              <button 
                type="submit" 
                onClick={props.handleFormSubmit} 
                className="btn btn-success">
                <span><i className="fa fa-search"></i></span>
              </button>
            </span>
          </div>
          { props.memberId === undefined ? [] :
            <>
              <Button color="info" size="sm" 
                onClick={props.renderRedirect} >My Favorites
              </Button>    
            </>
          }
          
        </form>
      </span>
    </span>
    
  </>
  );
}

export default SearchForm;
