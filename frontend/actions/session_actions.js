import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const login = user => dispatch => {
  ApiUtil.login(user).then(user => {
    dispatch(receiveCurrentUser(user));
  },
    errors => {
      dispatch(receiveErrors(errors));
    }
  );
};

export const logout = () => dispatch => {
  ApiUtil.logout().then(() => {
    dispatch(logoutCurrentUser());
  });
};

export const signup = user => dispatch => {
  ApiUtil.signup(user).then(user => {
    dispatch(receiveCurrentUser(user));
  },
    errors => {
      dispatch(receiveErrors(errors));
    }
  );
};


export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  };
}


const receiveCurrentUser = user => {

  return ({
    type: RECEIVE_CURRENT_USER,
    user
  });
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => {

  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};