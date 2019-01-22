import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
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
    })
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    const errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    })
    return (
      <div>        
        <Link to={this.props.formType === "signup" ? "/login" : "/signup"}>{this.props.formType === "signup" ? "Log in" : "Sign Up"}</Link>
        <h2>{this.props.formType === "signup" ? "Sign up" : "Log in"}</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="email" onChange={this.updateEmail.bind(this)} value={this.state.email} placeholder="email" />
          <input type="password" onChange={this.updatePassword.bind(this)} value={this.state.password} placeholder="password" />
          <button>Submit!</button>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default SessionForm