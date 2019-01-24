import React from 'react';

import GreetingNavbar from './greeting_navbar';
import GreetingMain from './greeting_main';

const Greeting = ({ currentUser, logout }) => {
  return (
    <div> 
      <GreetingNavbar />
      <GreetingMain />
    </div>
  )
};

export default Greeting;