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
      <GreetingContainer />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  )
}

export default App;