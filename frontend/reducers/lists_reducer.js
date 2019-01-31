import { RECEIVE_LIST, DELETE_LIST, RECEIVE_LISTS  } from '../actions/list_actions';
import { RECEIVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const listsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LISTS: {
      return action.lists 
    }
    case RECEIVE_LIST: {
      return merge({}, state, {[action.list.id]: action.list});
    }
    case RECEIVE_CARD: {
      return merge({}, {[action.data.list.id]: action.data.list});
    }

    case RECEIVE_BOARD:
      return merge({}, action.data.lists);
    case DELETE_LIST:
      const newState = merge({}, state);
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
};

export default listsReducer;