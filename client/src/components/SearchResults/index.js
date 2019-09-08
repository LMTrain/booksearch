import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// let searchedResults = []
function SearchResults(props) {
  
  return (
    <div>
      <ul className="list-group search-results">
        {props.books.map(result => (        
          // console.log({result}),
          // searchedResults.push(result),
          <li key={result.id} className="list-group-item">
            <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
            <Link key={result.id} to={"/index/" + result.id}>
            <span><button type="submit" onClick={props.handleDetailSubmit} className="btn btn-success">Detail</button></span>

            {/* <span><button type="submit" className="btn btn-success">Details</button></span><span>  </span> */}
            </Link> 
            <span><button type="submit" onClick={props.favoriteSubmit} className="btn btn-success">Add to Favorite</button></span>
            <p>id : {result.id}</p>
            <p>Title : {result.volumeInfo.title}</p>
            <span>Authors : {result.volumeInfo.authors} | |</span>
            <span>Published Date : {result.volumeInfo.publishedDate}</span>        
          </li>
          
        ))}
        
      </ul>
    </div>
    
  );
}
// console.log("This Searched results:   ",{searchedResults})
// console.log("This is choosen id:   ",{searchedResults[0]})
export default SearchResults;
