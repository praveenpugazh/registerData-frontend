const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "POST_DATA":
      return { ...state };
    case "DELETE_DATA":
      return { ...state };
    default:
      return state;
  }
};

export default globalReducer;
