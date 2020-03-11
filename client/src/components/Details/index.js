import React from "react";
import "./style.css";



function Details(props) { 
  console.log("THIS IS DETAILS PROPS", props)
  return (
   
    <div>
    <h3 className="text-center">Book Detail</h3>
    <ul className="list-group search-favBooks">
      {props.showBook.map(favBook => (          
        <li key={favBook.id} className="list-group-item">
          <img alt={favBook.volumeInfo.title} width="200" height="220" className="img-fluid" src={favBook.volumeInfo.imageLinks == null ? 'https://lmtrain.github.io/lm-images/assets/images/books5.jpg' : favBook.volumeInfo.imageLinks.thumbnail} /><span></span>
          <span style={{ marginLeft: 80 }}><a href = "/search/"><button type="submit" className="btn btn-success">Back To Search</button>{" "}</a></span> 
          <span> 
            {/* <button id={favBook.etag} type="submit" onClick={() => props.favoriteSubmit(favBook.id)} className="btn btn-success">Add to Favorite
            </button> */}
            { props.memberId === null || props.memberId === undefined ? "Sign In to Add Book to Favorite" :
              <>
                <button  
                  id={favBook.etag} type="submit" onClick={() => props.favoriteSubmit(favBook.id)} className="btn btn-success">Add to Favorite
                </button>    
              </>
            }
          </span>       
          <br></br>
          <p><b>Title             :</b> {favBook.volumeInfo.title}</p>
          <p><b>Authors         :</b> {favBook.volumeInfo.authors}</p>
          <p><b>Published Date :</b> {favBook.volumeInfo.publishedDate}</p>
          <p><b>Description :</b> {favBook.volumeInfo.description}</p>          
        </li>        
      ))}      
    </ul>                
  </div>
  );
  
}



export default Details;
