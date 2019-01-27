
import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';

export const receiveLists = (boardId) => dispatch => {
  return ListApiUtil.receiveLists(boardId).then(response => {
    return dispatch({type: RECEIVE_LISTS, lists: response});
  },
    errors => {
      return dispatch(receiveErrors(errors));
    }
  );
};