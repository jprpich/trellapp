import { connect } from 'react-redux';
import Boards from './boards';
import { receiveBoards } from '../../actions/board_actions';

const msp = state => ({
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => ({
  receiveBoards: () => dispatch(receiveBoards())
});

export default connect(msp, mdp)(Boards);