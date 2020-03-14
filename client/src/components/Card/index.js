import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {  
  return (
    <div className="about-card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      {props.children}
      
    </div>
  );
}

export default Card;
