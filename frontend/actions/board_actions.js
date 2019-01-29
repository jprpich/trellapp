import * as ApiUtil from '../util/board_api_util';
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";
export const DELETE_BOARD = "DELETE_BOARD";

export const receiveBoards = () => dispatch => {
  return ApiUtil.receiveBoards().then(response => {
    return dispatch({type: RECEIVE_BOARDS, boards: response});
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const createBoard = (board) => dispatch => {
  return ApiUtil.createBoard(board).then(response => {
    return dispatch({ type: RECEIVE_BOARD, data: response });
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const updateBoard = (board) => dispatch => {
  return ApiUtil.updateBoard(board).then(response => {
    return dispatch({ type: RECEIVE_BOARD, data: response });
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const fetchBoard = (id) => dispatch => {
  return ApiUtil.fetchBoard(id).then(response => {
    return dispatch({ type: RECEIVE_BOARD, data: response });
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const deleteBoard = (id) => dispatch => {
  return ApiUtil.deleteBoard(id).then(() => {
    return dispatch({ type: DELETE_BOARD, boardId: id });
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_BOARD_ERRORS,
    errors
  });
};

export const clearBoardErrors = () => {
  return {
    type: CLEAR_BOARD_ERRORS
  };
}