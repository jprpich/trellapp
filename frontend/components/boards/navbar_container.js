import { connect } from 'react-redux';
import React from 'react';
import Navbar from './navbar';
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
  ),
  boardsDropdown: (
    <button className="boards-button" onClick={() => dispatch(openModal('boards dropdown'))}><i className="fas fa-bars"></i>
      Boards
    </button>
  )
});

export default connect(msp, mdp)(Navbar);

