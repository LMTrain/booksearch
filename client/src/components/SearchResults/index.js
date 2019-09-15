import React from "react";
import "./style.css";



function SearchResults(props) {

  // console.log('props', props)
  
  return (
             
    <div>
      <ul className="list-group search-results">
        {props.books.map(result => (   
                 
          <li key={result.etag} className="list-group-item">
            <img alt={result.volumeInfo.title} width="200" height="220" className="img-fluid" src={result.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : result.volumeInfo.imageLinks.thumbnail} /><span>     </span>
            
            <span><button id={result.etag}type="submit" onClick={() => props.handleDetailsSubmit(result.id)} className="btn btn-success">Detail</button></span><span>  </span>   
              
            <span><button id={result.etag} type="submit" onClick={() => props.favoriteSubmit(result.id)} className="btn btn-success">Add to Favorite</button></span><span>  </span>                             
           
            <p><b>Title             :</b> {result.volumeInfo.title}</p>
            <span><b>Authors         :</b> {result.volumeInfo.authors} | |</span>
            <span><b>Published Date :</b> {result.volumeInfo.publishedDate}</span>
            
          </li>          
          
        ))}
        
      </ul>
     
                  
    </div>
    
  );
  
}



export default SearchResults;
