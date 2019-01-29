import * as ListApiUtil from '../util/list_api_util';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const DELETE_LIST = "DELETE_LIST";

export const createList = (list) => dispatch => {
  return ListApiUtil.createList(list).then(response => {
    return dispatch({ type: RECEIVE_LIST, list: response });
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};

export const deleteList = (id) => dispatch => {
  return ListApiUtil.deleteList(id).then(() => {
    return dispatch({ type: DELETE_LIST, listId: id });
  });
};
