export const createCard = (card) => {
  return $.ajax({
    method: "POST",
    url: `/api/lists/${card.list_id}/cards`,
    data: { card }
  });
};

export const updateCard = (card) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/cards/${card.id}`,
    data: { card }
  });
};


export const deleteCard = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/cards/${id}`
  })
}

export const fetchCard = (id) => {
  return $.ajax({
    method: "get",
    url: `api/cards/${id}`
  })
}
