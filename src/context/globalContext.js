import { createContext, useReducer } from "react";
import globalReducer from "./globalReducer";
import axios from "axios";
const initialState = {
  data: [],
  loading: true,
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
  const updateData = async (id, inputData) => {
    const { data } = await axios.patch(
      `http://localhost:5000/data/${id}`,
      inputData
    );
    dispatch({ type: "UPDATE_DATA", payload: data });
  };
  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`);
    dispatch({ type: "DELETE_DATA", payload: id });
  };
  return (
    <globalContext.Provider
      value={{
        data: state.data,
        getData,
        postData,
        deleteData,
        updateData,
        loading: state.loading,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default globalContext;
