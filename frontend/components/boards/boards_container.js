import { connect } from 'react-redux';
import Boards from './boards';
import { logout } from '../../actions/session_actions';
import { receiveBoards } from '../../actions/board_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  receiveBoards: () => dispatch(receiveBoards())
});

export default connect(msp, mdp)(Boards);