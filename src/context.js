import React from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

// Rest Countries API Endpoints
const ALL_URL = "https://restcountries.eu/rest/v2/all";
const SEARCH_BY_NAME = "https://restcountries.eu/rest/v2/name/";

const initialState = {
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <AppContext.Provider value={"hello"}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => React.useContext(AppContext);

export default AppProvider;
