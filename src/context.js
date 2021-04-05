import React from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
};

const context = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => React.useContext(AppContext);

export default context;
