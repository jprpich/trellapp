import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({
  board: { title: "" }
});

const mdp = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()) 
});

export default connect(msp, mdp)(BoardForm);