import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const createComment = (comment) => dispatch => {
  return CommentApiUtil.createComment(comment).then(response => {
    return dispatch({ type: RECEIVE_COMMENT, comment: response });
  });
};


export const receiveComments = (id) => dispatch => {
  return CommentApiUtil.receiveComments(id).then(response => {
    return dispatch({ type: RECEIVE_COMMENTS, comments: response });
  });
};
