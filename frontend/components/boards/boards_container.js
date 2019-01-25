import { connect } from 'react-redux';
import React from 'react';
import Boards from './boards';
import { logout } from '../../actions/session_actions';
import { receiveBoards } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  receiveBoards: () => dispatch(receiveBoards()),
  otherForm: (
    <button onClick={() => dispatch(openModal('create board'))}>
      Create Board!
    </button>
  ),
  closeModal: () => dispatch(closeModal()) 
});

export default connect(msp, mdp)(Boards);