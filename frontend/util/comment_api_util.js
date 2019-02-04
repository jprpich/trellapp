export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/cards/${comment.card_id}/comments`,
    data: { comment }
  });
};
