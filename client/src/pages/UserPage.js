import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import { Redirect } from "react-router-dom";
import API from "../utils/API";






var userArray = []
var membername = ""
var userName =""
var usertheme = "";
var divStyle = {};
var redirectOption = " "

class UserPage extends Component {
  
  state = {    
    user:[],
    userSettings: [],
    userArray: [],
    userName: this.props.currentUser,
    redirect: false,    
  };

  componentWillMount() {
    this.loadUserData();    
  }

  loadUserData = () => {
    this.setState({
      userName: this.props.currentUser
    })
    userName = this.state.userName
  
    const currentAccount = {     
      userName,          
    }
    this.loadAPIgetUser(currentAccount.userName);
  }

  loadAPIgetUser = (id) => {
    const app = this;
    id = userName
    API.getUser({      
      userName: userName,               
    })
    .then(function(res){
      return new Promise(function(resolve, reject){
        app.setState({ user: res.data })
        resolve(true);
      })
    }).then(function(){
      userArray = [...app.state.user]
      usertheme = userArray[0].userTheme
      membername = userArray[0].memberName
      app.userTheme(usertheme);
    })
    .catch(err => console.log(err));
  }  

  
  // GETTING USERS INFO FROM DB
  userCart = () => {
    this.loadAPIgetUser(userArray[0].userName)

  }

  logOutPage = () => {    
    redirectOption = "logOut"
    this.props.setTheme("theme0")
    this.props.logOut()
      this.setState({
        redirect: true,
      })
  }  

  settingButton = () => {
    redirectOption = "settings"
    this.setState({
      redirect: true,       
    })    
  }
  
  todaysDeal = () => {
    redirectOption = "todaysDeal"
    this.setState({
      redirect: true,       
    })    
  }
  
  userCartPage = () => {
    redirectOption = "usercartpage"
    this.setState({
      redirect: true,       
    })    

  }

  render() {
    if (this.state.redirect) {
      switch(redirectOption){
        case "logOut":
            localStorage.clear();
          return <Redirect to="/"/>;                 
        case "settings":
          return <Redirect to='/Settings' />;                 
        case "todaysDeal":
          return <Redirect to='/TodaysDeal' />;
        case "usercartpage":
          return <Redirect to='/Cart' />;             
        default:            
          break;
      }
  }
   
    return (
      <div>
      
        <Row>              
          <Col size="md-10">
            <div style={divStyle}><b> Welcome {membername}!</b></div>
          </Col>
          <Col size="md-2">
            <div className="lineitems">            
                <span><button type="submit" className="btn btn-success" onClick={() => this.settingButton()}>Settings</button></span>                
                <button type="submit" className="btn btn-success" onClick={() => this.logOutPage()}>Sign Out</button>
            </div>        
          </Col>
        </Row>
        <Container style={{ marginTop: 60 }}>
        
        </Container>
      </div>
    );
  }
}

export default UserPage;





