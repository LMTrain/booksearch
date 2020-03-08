import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function NoteForm(props) {
  // console.log("THIS IS NOTEFORM PROPS", props) 
  return (
   <>
    <span>     
      <form className="note">
        <div className="form-group">
          <label htmlFor="note"></label>
          <input
            value={props.note}
            onChange={props.handleInputChange}
            name="note"          
            type="text"
            className="form-control"
            placeholder="Add Note"
            id="note"
          />
          <span>
            <button 
              type="submit" 
              onClick={props.handleFormSubmit} 
              className="btn btn-success">
              <span>Save</span>
            </button>
          </span>
        </div>
      </form>
    </span>
    
  </>
  );
}

export default NoteForm;
