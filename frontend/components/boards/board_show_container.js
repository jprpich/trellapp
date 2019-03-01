import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, deleteBoard, receiveBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import { displayShareOptions, closeShareOptions } from '../../actions/dropdown_actions';
import { receiveUsers } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId] || null,
    display: state.ui.dropdown,
    userId: state.session.id,
    users: Object.values(state.entities.users)
  }
};

const mdp = (dispatch) => {
  return {
    fetchBoard: (id) => dispatch(fetchBoard(id)),
    deleteBoard: (id) => dispatch(deleteBoard(id)),
    editDropdown: (id) => dispatch(openModal('edit board', id)),
    receiveBoards: () => dispatch(receiveBoards()),
    showShare: () => dispatch(openModal('show share')),
    displayShareOptions: () => dispatch(displayShareOptions()),
    closeShareOptions: () => dispatch(closeShareOptions()),
    receiveUsers: () => dispatch(receiveUsers())
  }
};

export default connect(msp, mdp)(BoardShow);