import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Signin from "./pages/Signin";
import GetStarted from "./pages/GetStarted";
import UserPage from "./pages/UserPage";



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
          <Route exact path="/Getstarted" component={GetStarted} />   
          <Route exact path="/Signin" render = { () => <Signin saveMemberID={this.saveMemberID} />}/>
          <Route exact path="/Sign out" render = { () => <About/>}/>
          {/* <Route exact path="/Getstarted" render = { () => <GetStarted saveMemberID={this.saveMemberID} />}/>           */}
          {/* <Route exact path="/UserPage" render = { () => <UserPage logOut={this.logOut} saveMemberID={this.saveMemberID} currentUser={this.state.currentUser} />}/> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
