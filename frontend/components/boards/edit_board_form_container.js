import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import {fetchBoard, updateBoard} from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.id] || null   
  }
};

const mdp = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  updateBoard: (board) => dispatch(updateBoard(board)),
  closeModal: () => dispatch(closeModal()) 
});

export default connect(msp, mdp)(EditBoardForm);