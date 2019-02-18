export const DISPLAY_CARD_FORM = 'DISPLAY_CARD_FORM';
export const CLOSE_CARD_FORM = "CLOSE_CARD_FORM"

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