import { createContext, useReducer } from "react";
import globalReducer from "./globalReducer";
import axios from "axios";
const initialState = {
  data: [],
};

const globalContext = createContext(initialState);

export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:5000/data");
    dispatch({ type: "GET_DATA", payload: data });
  };

  const postData = async (inputData) => {
    const { data } = await axios.post("http://localhost:5000/data", inputData);
    dispatch({ type: "POST_DATA", payload: data });
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`);
    dispatch({ type: "DELETE_DATA" });
  };
  return (
    <globalContext.Provider
      value={{
        data: state.data,
        getData,
        postData,
        deleteData,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default globalContext;
