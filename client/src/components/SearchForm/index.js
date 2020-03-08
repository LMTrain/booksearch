import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) { 
  return (
   <>
    <span>
      <h3 className="text-center">Search For Books</h3>
      <form className="search">
        <div className="form-group">
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
      </form>
    </span>
    
  </>
  );
}

export default SearchForm;
