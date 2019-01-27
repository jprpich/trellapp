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
      <i className="fas fa-plus"></i>
    </button>
  ),
  profileDropdown: (
    <button className="profile-dropdown" onClick={() => dispatch(openModal('profile dropdown'))}>
      DU
    </button>
  )
});

export default connect(msp, mdp)(Navbar);

