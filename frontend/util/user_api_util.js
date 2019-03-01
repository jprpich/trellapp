export const receiveUsers = () => {
  return $.ajax({
    method: "get",
    url: `api/users`
  });
};