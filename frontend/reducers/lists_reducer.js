import { RECEIVE_LISTS, RECEIVE_LIST, DELETE_LIST } from '../actions/list_actions';
import { merge } from 'lodash';

const listsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, state, { [action.list.id]: action.list });
    case DELETE_LIST:
      const newState = merge({}, state);
      delete newState[action.listId];
      return newState;
    default:
      return state;
  }
};

export default listsReducer;