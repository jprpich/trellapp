import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  otherForm: (
    <button onClick={() => dispatch(openModal('create board'))}>
      Create Board!
    </button>
  )
});

export default connect(msp, mdp)(Navbar);

