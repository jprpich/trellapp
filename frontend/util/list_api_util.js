export const createList = (list) => {
  return $.ajax({
    method: "POST",
    url: `/api/boards/${list.board_id}/lists`,
    data: { list }
  });
};

export const deleteList = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/lists/${id}`
  })
}