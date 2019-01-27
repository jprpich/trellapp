export const receiveLists = boardId => {
  return $.ajax({
    method: "GET",
    url: `/api/boards/${boardId}/lists`
  });
};
