import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
          <span><button type="submit" onClick={props.detail} className="btn btn-success">Details</button></span><span>  </span>
          <span><button type="submit" onClick={props.favoriteSubmit} className="btn btn-success">Add to Favorite</button></span>
          <p>Title : {result.volumeInfo.title}</p>
          <span>Authors : {result.volumeInfo.authors} | |</span>
          <span>Published Date : {result.volumeInfo.publishedDate}</span>         
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
