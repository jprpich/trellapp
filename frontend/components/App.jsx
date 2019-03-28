import React from 'react';
import { Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BoardsContainer from './boards/boards_container';
import Modal from './modal';
import NavbarContainer from './navbar/navbar_container';
import BoardShowContainer from './boards/board_show_container';

const App = () => {
  return (
    <div>
      <Modal />
      <Switch>
        <AuthRoute exact path ="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

      <ProtectedRoute path="/" component={NavbarContainer} />
      <ProtectedRoute exact path="/boards" component={BoardsContainer} />
      <ProtectedRoute exact path="/boards/:boardId" component={BoardShowContainer} />
    </div>
  )
}

export default App;