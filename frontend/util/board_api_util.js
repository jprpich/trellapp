export const receiveBoards = () => {
  return $.ajax({
    method: "get",
    url: `api/boards`
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: "post",
    url: `api/boards`,
    data: {board}
  });
};