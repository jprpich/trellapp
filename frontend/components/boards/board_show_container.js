import { connect } from 'react-redux';
import BoardShow from './board_show';
import {fetchBoard, deleteBoard} from '../../actions/board_actions';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId] || null
  }
};

const mdp = dispatch => {
  return {
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    deleteBoard: (id) => dispatch(deleteBoard(id))
  }
};

export default connect(msp, mdp)(BoardShow);