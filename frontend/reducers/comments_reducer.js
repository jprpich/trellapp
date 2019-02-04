import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS: 
      return action.comments
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
};

export default commentsReducer;