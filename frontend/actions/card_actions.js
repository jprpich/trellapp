import * as CardApiUtil from '../util/card_api_util';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const DELETE_CARD = "DELETE_CARD";

export const createCard = (card) => dispatch => {
  return CardApiUtil.createCard(card).then(response => {
    return dispatch({ type: RECEIVE_CARD, data: response });
  }
  );
};

export const updateCard = (card) => dispatch => {
  return CardApiUtil.updateCard(card).then(response => {
    return dispatch({ type: RECEIVE_CARD, data: response });
  }
  );
};


export const deleteCard = (id) => dispatch => {
  return CardApiUtil.deleteCard(id).then(() => {
    return dispatch({ type: DELETE_CARD, cardId: id });
  });
};

export const fetchCard = (id) => dispatch => {
  return CardApiUtil.fetchCard(id).then(response => {
    return dispatch({ type: RECEIVE_CARD, data: response });
  });
};