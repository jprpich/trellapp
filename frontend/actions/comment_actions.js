import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment).then(response => {
    return dispatch({ type: RECEIVE_COMMENT, comment: response });
  });
};



