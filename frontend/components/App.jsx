import React from 'react';

import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BoardContainer from './boards/boards_container'
import Modal from './modal';


const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path = "/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

      <ProtectedRoute exact path="/boards" component={BoardContainer} />
    </div>
  )
}

export default App;