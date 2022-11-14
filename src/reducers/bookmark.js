export const addBookmark = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const deleteBookmark = (items) => {
  return {
    type: "DELETE",
    payload: items,
  };
};

const bookmark = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item !== action.payload);

    default:
      return state;
  }
};

export default bookmark;
