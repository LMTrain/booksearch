import React from "react";
import "./style.css";



function Details(props) {


  return (
   
    <div>
    <ul className="list-group search-favBooks">
      {props.showBook.map(favBook => (          
        <li key={favBook.id} className="list-group-item">
          <img alt={favBook.volumeInfo.title} width="200" height="220" className="img-fluid" src={favBook.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : favBook.volumeInfo.imageLinks.thumbnail} /><span></span>
          <span><a href = "/search/"><button type="submit" className="btn btn-success">Back To Search</button></a></span>         
          <p><b>Title             :</b> {favBook.volumeInfo.title}</p>
          <span><b>Authors         :</b> {favBook.volumeInfo.authors} | |</span>
          <p><b>Published Date :</b> {favBook.volumeInfo.publishedDate}</p>
          <p><b>Description :</b> {favBook.volumeInfo.description}</p>          
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default Details;
