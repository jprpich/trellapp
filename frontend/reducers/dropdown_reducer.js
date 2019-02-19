import { DISPLAY_CARD_FORM, CLOSE_CARD_FORM, DISPLAY_LIST_FORM, CLOSE_LIST_FORM, DISPLAY_LIST_OPTIONS, CLOSE_LIST_OPTIONS } from '../actions/dropdown_actions';

export default function dropdownReducer(state = {displayCardForm: false}, action) {
  switch (action.type) {
    case DISPLAY_CARD_FORM:
      return action.display;
    case CLOSE_CARD_FORM:
      return action.display
    case DISPLAY_LIST_FORM: 
      return action.display;
    case CLOSE_LIST_FORM:
      return action.display; 
    case DISPLAY_LIST_OPTIONS: 
      return action.display; 
    case CLOSE_LIST_OPTIONS:
      return action.display; 
    default:
      return state;
  }
}