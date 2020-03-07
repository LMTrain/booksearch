import React from "react";
import "./style.css";


function NoteForm(props) { 
  return (
   <>
    <span>    
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
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              <span><i className="fa fa-search"></i></span>
            </button>
          </span>
        </div>
      </form>
    </span>
    
  </>
  );
}

export default NoteForm;




addingNote = () => { 
    return (
     <>
      <span>        
        <form className="note">
          <div className="form-group">
            <label htmlFor="note"></label>
            <input
              value={this.state.note}
              onChange={this.handleInputChange()}
              name="note"          
              type="text"
              className="form-control"
              placeholder="Add your note to book"
              id="note"
            />
            <span>
              <button type="submit" onClick={this.handleNoteSubmit()} className="btn btn-success">
                <span><i className="fa fa-search"></i></span>
              </button>
            </span>
          </div>
        </form>
      </span>
      
    </>
    );
  }