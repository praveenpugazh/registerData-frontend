const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload, loading: false };
    case "POST_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case "UPDATE_DATA":
      return {
        ...state,
        data: state.data.map((p) =>
          p._id === action.payload_id ? action.payload : p
        ),
        loading: false,
      };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};

export default globalReducer;
