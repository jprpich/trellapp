import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const msp = state => ({

});

const mdp = dispatch => ({
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

