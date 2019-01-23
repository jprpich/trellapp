import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div className="greeting-component">
        <h2>Welcome, {currentUser.email}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div className="greeting-component"> 
        <h1>Trellapp</h1>
        <h2>Trello lets you work more collaboratively and get more done.</h2>
        <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
        <Link className="app-signup-button" to="/signup">Sign Up – It’s Free!</Link>
      </div>
    )
  }
};

export default Greeting;