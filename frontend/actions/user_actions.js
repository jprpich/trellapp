import * as ApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = () => dispatch => {
  return ApiUtil.receiveUsers().then(response => {
    return dispatch({ type: RECEIVE_USERS, users: response });
  });
};