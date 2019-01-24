import React from 'react';

import GreetingNavbar from './greeting_navbar';
import GreetingMain from './greeting_main';

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
      <div> 
        <GreetingNavbar />
        <GreetingMain />
      </div>
    )
  }
};

export default Greeting;