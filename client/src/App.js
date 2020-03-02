import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails"
// import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Favorite" component={Favorite} />      
          <Route exact path="/search" component={Search} />
          <Route exact path="/BookDetails" component={BookDetails} />
                  
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
