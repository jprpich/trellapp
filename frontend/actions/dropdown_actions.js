export const DISPLAY_CARD_FORM = 'DISPLAY_CARD_FORM';
export const CLOSE_CARD_FORM = "CLOSE_CARD_FORM";
export const DISPLAY_LIST_FORM = "DISPLAY_LIST_FORM";
export const CLOSE_LIST_FORM = "CLOSE_LIST_FORM";

export const displayCardForm = (listId) => {
  return {
    type: DISPLAY_CARD_FORM,
    display: {
      displayCardForm: true, 
      listId: listId
    }
  };
};

export const closeCardForm = () => {
  return {
    type: CLOSE_CARD_FORM,
    display: {
      displayCardForm: false
    }
  };
};

export const displayListForm = () => {
  return {
    type: DISPLAY_LIST_FORM,
    display: {
      displayListForm: true
    }
  };
};

export const closeListForm = () => {
  return {
    type: CLOSE_LIST_FORM,
    display: {
      displayListForm: false
    }
  };
};