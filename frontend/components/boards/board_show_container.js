import { connect } from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard, deleteBoard} from '../../actions/board_actions';
import React from 'react';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId] || null
  }
};

const mdp = (dispatch) => {
  return {
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    deleteBoard: (id) => dispatch(deleteBoard(id)),
    editDropdown: () => dispatch(openModal('edit board'))
  }
};

export default connect(msp, mdp)(BoardShow);