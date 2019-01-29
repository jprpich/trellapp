export const createCard = (card) => {
  return $.ajax({
    method: "POST",
    url: `/api/lists/${card.list_id}/cards`,
    data: { card }
  });
};

export const deleteCard = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/cards/${id}`
  })
}