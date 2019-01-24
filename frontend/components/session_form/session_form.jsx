import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disabled: true 
    };
  }

  componentWillUnmount(){
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    this.setState({
      email: "",
      password: ""
    });
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    }, () => {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        this.setState({
          disabled: false
        });
      }
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    }, () => {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        this.setState({
          disabled: false
        });
      }
    });
  }

  submitDemoUser(e){
    e.preventDefault();
    const user = Object.assign({}, { email: "email@domain.com", password: "123456"});
    this.props.processDemoUser(user);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    let error; 
    if (this.props.errors.length >= 1) {
      error = <p className="error-message">{this.props.errors[0]}</p>
    } else {
      error = ""
    }

    return (
      <div className="session-form">        
        {error}
        <h1>{this.props.formType === "signup" ? "Create a Trello Account" : "Log in to Trello"}</h1>
        <div className="create-account-quiet">
          or <Link 
               to={this.props.formType === "signup" ? "/login" : "/signup"}>{this.props.formType === "signup" ? "sign in to your account" : "create an account"}
             </Link>
        </div>
        
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            onChange={this.updateEmail.bind(this)} 
            value={this.state.email} 
            placeholder="e.g, email@domain.com" 
          />
  
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            onChange={this.updatePassword.bind(this)} 
            value={this.state.password} 
            placeholder="e.g,***********" 
          />
          
          <input 
            type="submit" 
            disabled={(this.state.disabled && this.props.formType === "signup") ? "disabled" : ""} 
            className={(this.state.disabled && this.props.formType === "signup") ? "disabled" : "real-user"} 
            value={this.props.formType === "signup" ? "Create New Account" : "Log In"}
          />

          
        </form>

        <button onClick={this.submitDemoUser.bind(this)} className="demo-user-button">
          <i className="fas fa-user"></i>Sign up with Demo User 
        </button>
       
        <footer>
          <ul>
            <li>
              <a href="https://github.com/jprpich" target="_blank">Joshua Prpich Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">Facebook</a>
            </li>
          </ul>
          <p>© Copyright 2019. All rights reserved.</p>
        </footer>
        
      </div>
    )
  }
}

export default SessionForm