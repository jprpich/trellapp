import { RECEIVE_BOARDS, RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return merge({}, state, { [action.data.board.id]: action.data.board });
    case DELETE_BOARD:
      const newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;