import { DISPLAY_CARD_FORM, CLOSE_CARD_FORM } from '../actions/dropdown_actions';

export default function dropdownReducer(state = {displayCardForm: false}, action) {
  switch (action.type) {
    case DISPLAY_CARD_FORM:
      return action.display;
    case CLOSE_CARD_FORM:
      return action.display
    default:
      return state;
  }
}