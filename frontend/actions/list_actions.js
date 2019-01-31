import * as ListApiUtil from '../util/list_api_util';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const DELETE_LIST = "DELETE_LIST";
export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export const createList = (list) => dispatch => {
  return ListApiUtil.createList(list).then(response => {
    return dispatch({ type: RECEIVE_LIST, list: response });
  }
  );
};

export const deleteList = (id) => dispatch => {
  return ListApiUtil.deleteList(id).then(() => {
    return dispatch({ type: DELETE_LIST, listId: id });
  });
};

export const receiveLists = (id) => dispatch => {
  return ListApiUtil.receiveLists(id).then(response => {
    return dispatch({ type: RECEIVE_LISTS, lists: response });
  });
};