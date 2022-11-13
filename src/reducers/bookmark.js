export const addBookmark = (cardText) => {
  return {
    type: "ADD",
    cardText: cardText,
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
      return [...state, action.cardText];
    case "DELETE":
      return [...action.payload];

    default:
      return state;
  }
};

export default bookmark;
