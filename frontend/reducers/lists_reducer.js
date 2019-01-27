import { RECEIVE_LISTS } from '../actions/list_actions';
import { merge } from 'lodash';

const listsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    default:
      return state;
  }
};

export default listsReducer;