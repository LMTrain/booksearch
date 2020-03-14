import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {  
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">
        LM Books
      </Link>
  { props.userName !== undefined ? (<div style={{ fontSize: 20, color: "white"}}><b>{props.membername}</b></div>) :
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>            
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/getstarted"
                className={window.location.pathname === "/getstarted" ? "nav-link active" : "nav-link"}
              >
                Get Started
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
              >
                Sign In
              </Link>
              </li>             
          </ul>
        </div>
      }
    </nav>
  );
}

export default Navbar;
