import React, { Component } from "react";
import Container from "../components/Container";
import "./style.css";
import API from "../utils/API";
import { Button } from 'reactstrap';
import Search from "./Search";



class Signin extends Component {
  state = {    
    user:{},
    membername: "",
    userName: null,
    memberpassword: "",  
    redirect: false,
    isError: false,
    errorMessage: '',
    message: '', 
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

    
  signInSubmit = event => {
    event.preventDefault();
    const {memberemail, memberpassword} = this.state

    if (!memberemail) {
      this.message = "Username cannot be empty"
      this.setState({message: "Username cannot be empty"})         
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
    }
    
    if (!memberpassword) {
      this.message = "Password cannot be empty"
      this.setState({message: "Password cannot be empty"})       
      return;
    } else {
      this.message = " "
      this.setState({message: " "})      
  }

    const userAccount = {     
      memberemail,  
      memberpassword,     
    }

    this.setState({
      memberemail: '',      
      memberpassword: '',    
    })    
        
   
    let userName = String(userAccount.memberemail)   
    let password = String(userAccount.memberpassword)
   
    API.loginUser({     
      userName: userName,      
      password: password,

    })    
    .then(res => {
      
      const { data } = res.data;
      if(res.data.error === "Invalid Password"){
        console.log(res.data)
        this.message = res.data.error        
        this.setState({
          isError: true,         
          errorMessage: res.data.error,
          memberemail: " ",      
          memberpassword: " ",
          message: res.data.error
        })
      } else if (res.data.error === "User does not exist!"){
          console.log(res.data)
          this.message = res.data.error         
          this.setState({
            isError: true,            
            errorMessage: res.data.error,
            memberemail: " ",      
            memberpassword: " ",
            message: res.data.error
          })
      
      } else {
    
        this.setState({
          redirect: true,
          userName: data[0].memberId,          
          membername: data[0].memberName,
        })
        console.log("THIS IS MEMBERID", this.state.userName)
        // this.props.saveMemberID(data[0].memberId)
        
        
      }
     
    })    
    .catch(err => console.log(err));      
  };


  render() {    
    return (
      <div>
        { this.state.userName !== null ? [] :
          <Container style={{ minHeight: "100%", width: "100%", marginTop: 80 }}>
            <div className="card card-body">
              {/* <div id="message"></div> */}
              <div id ="message">{this.message}</div>
              <h5>Sign In</h5>
              <form className="form-groups">          
                <div className="form-group">
                  <label id="username"></label>
                  <input 
                    value={this.memberemail}
                    onChange={this.handleInputChange}
                    name="memberemail"
                    type="text"
                    className="form-control"  
                    placeholder="Enter Your Email"
                    id="memberemail"
                    />
                </div>
                <div className="form-group">
                  <label id="password"></label>
                  <input 
                    value={this.memberpassword}
                    onChange={this.handleInputChange}
                    name="memberpassword"
                    type="password" 
                    className="form-control" 
                    placeholder="Enter User Password"
                    id="memberpassword" 
                    />
                </div>
                
              </form>            
              <div className="getstarted">
            <span>
              <Button 
                type="submit" onClick={this.signInSubmit} color="info" size="sm">Sign In
              </Button>{" "}
                      
              <p>No Account? <a href="/Getstarted">Create Account</a></p>
              <p><a href="/Getstarted">Forget Email/Password?</a></p>
            </span>
          </div>
            </div>
          </Container>
        }            
        {this.state.userName === null || this.state.userName === undefined ? [] : <Search          
            userName={this.state.userName}         
          />}
      </div>
    );
  }
}

export default Signin;





