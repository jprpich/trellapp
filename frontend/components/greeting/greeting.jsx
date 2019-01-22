import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome, {currentUser.email}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Signup or Login to proceed...</p>
      </div>
    )
  }
};

export default Greeting;