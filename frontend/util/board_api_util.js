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

export const updateBoard = (board) => {
  return $.ajax({
    method: "patch",
    url: `api/boards/${board.id}`,
    data: {board}
  });
};

export const fetchBoard = (id) => {
  return $.ajax({
    method: "get",
    url: `api/boards/${id}`
  })
}

export const deleteBoard = (id) => {
  return $.ajax({
    method: "delete",
    url: `api/boards/${id}`
  })
}