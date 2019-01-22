import React from 'react';

import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <h1>Trellapp</h1>
      <h2>Trello lets you work more collaboratively and get more done.</h2>
      <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
      <button class="app-signup-button">Sign Up – It’s Free!</button>
      <GreetingContainer />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;