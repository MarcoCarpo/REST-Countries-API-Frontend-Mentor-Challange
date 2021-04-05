import React from "react";
import { reducer } from "./reducer";

//MOCK DATA BEFORE API
import countries from "./mock/mockCountries";

const AppContext = React.createContext();

// Rest Countries API Endpoints
const ALL_URL = "https://restcountries.eu/rest/v2/all";
const SEARCH_BY_NAME = "https://restcountries.eu/rest/v2/name/";

const initialState = {
  countries: countries,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(AppContext);

export default AppProvider;
