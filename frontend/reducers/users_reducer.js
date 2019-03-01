import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users; 
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;