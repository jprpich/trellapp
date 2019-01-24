import { RECEIVE_BOARDS, RECEIVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board });
    default:
      return state;
  }
};

export default boardsReducer;