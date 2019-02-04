export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/cards/${comment.card_id}/comments`,
    data: { comment }
  });
};

export const receiveComments = (id) => {
  return $.ajax({
    method: "get",
    url: `api/cards/${id}/comments`
  })
}