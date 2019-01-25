import * as ApiUtil from '../util/board_api_util';
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";

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
    return dispatch({ type: RECEIVE_BOARD, board: response });
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
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