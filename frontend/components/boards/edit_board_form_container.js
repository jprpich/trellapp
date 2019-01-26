import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import {fetchBoard, updateBoard} from '../../actions/board_actions';

const msp = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.boardId] || null   
});

const mdp = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  updateBoard: (board) => dispatch(updateBoard(board))
});

export default connect(msp, mdp)(EditBoardForm);