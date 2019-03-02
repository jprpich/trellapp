export const shareBoard = (data) => {
  return $.ajax({
    method: "POST",
    url: `/api/share`,
    data: { data }
  });
};
