import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import UserForm from "../components/UserForm";
import { Redirect } from "react-router-dom";



class GetStarted extends Component {
  state = {
    memberId: "",
    user:{},
    membername: "",
    userName: "",
    memberemail: "",
    memberpassword: "",
    confirmpassword: "",
    redirect: false,
    createdAccount: 0
  };

  loadSignInPage = () => {    
    this.setRedirect()
    
  };
  
  setRedirect = () => {    
    this.setState({
      redirect: true,
      
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {      
      // this.props.saveMemberID(UsermemberID) 
      return <Redirect to='/Signin' />
    }
  };  
 
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const {membername, memberemail, memberpassword, confirmpassword} = this.state

    if (!membername) {
      document.getElementById("message").textContent = "Name field can not be empty";   
      return;
    }else{document.getElementById("message").textContent = "";}

    if (!memberemail) {
      document.getElementById("message").textContent = "Email cannot be empty";    
      return;
    }else{document.getElementById("message").textContent = "";}
    
    if (!memberpassword) {
      document.getElementById("message").textContent = "Password cannot be empty";   
      return;
    }else{document.getElementById("message").textContent = "";}

    if (memberpassword !== confirmpassword) {
      document.getElementById("message").textContent = "Passwords should match!";     
      return;
    }else{document.getElementById("message").textContent = "";}

    const newAccount = {
      membername,
      memberemail,
      memberpassword,
      confirmpassword
    }    
 
    
    let memberId = String(newAccount.memberemail)
    let memberName = String(newAccount.membername)
    let userName = String(newAccount.memberemail)
    let email = String(newAccount.memberemail)
    let password = String(newAccount.memberpassword)

    API.saveUser({
      memberId: memberId,
      memberName: memberName,
      userName: userName,
      email: email,
      password: password,      
      
    })
      .then(res => {
       
        if(res.data.error ){
          console.log(res.data.error)
          document.getElementById("message").textContent = res.data.error;
        }else{
         
          this.loadSignInPage()
        }
      
      })
      
      .catch(err => console.log(err));  
    
  };

   

 
  render() {
  
    return (
      <div>
        {this.renderRedirect()}
        <Container style={{ marginTop: 150, marginLeft: 750 }}>        

          <UserForm
            id="message"
            membername={this.state.membername}
            memberemail={this.state.memberemail}
            memberpassword={this.state.memberpassword}         
            confirmpassword={this.state.confirmpassword}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}                       
          />
         
        </Container>
      </div>
      
    );
  }
}

export default GetStarted;
