import { connect } from 'react-redux';
import BoardShare from './board_share';

import { displayShareOptions, closeShareOptions } from '../../actions/dropdown_actions';
import { receiveUsers } from '../../actions/user_actions';
import { shareBoard } from '../../util/board_share_api_util';

const msp = (state, ownProps) => {
  return {
    display: state.ui.dropdown,
    users: Object.values(state.entities.users),
  }
}

const mdp = (dispatch) => {
  return {
    displayShareOptions: () => dispatch(displayShareOptions()),
    closeShareOptions: () => dispatch(closeShareOptions()),
    receiveUsers: () => dispatch(receiveUsers()),
    shareBoard: (data) => shareBoard(data)
  }
}

export default connect(msp, mdp)(BoardShare)