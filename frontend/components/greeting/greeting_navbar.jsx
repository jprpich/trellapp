import React from 'react';
import { Link } from 'react-router-dom';

class GreetingNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="greeting-navbar">
        <div className="logo">
          <Link to="/"><i className="far fa-user"></i></Link>
          <Link to="/"><h1>Trellapp</h1></Link>
        </div>

        <div className="session-links">
          <Link className="login" to="login">Log In</Link>
          <Link className="signup" to="signup">Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default GreetingNavbar 