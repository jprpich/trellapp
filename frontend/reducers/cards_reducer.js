import { DELETE_CARD, RECEIVE_CARD } from '../actions/card_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const cardsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CARD:
      return merge({}, state, {[action.data.card.id]: action.data.card});
    case RECEIVE_BOARD:
      return merge({}, action.data.cards);
    case DELETE_CARD:
      const newState = merge({}, state);
      delete newState[action.cardId];
      return newState;
    default:
      return state;
  }
};

export default cardsReducer;