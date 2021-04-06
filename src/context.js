import React from "react";
import { reducer } from "./reducer";
import axios from "axios";

//MOCK DATA BEFORE API
import countries from "./mock/mockCountries";

const AppContext = React.createContext();

// Rest Countries API Endpoints
const ALL_URL = "https://restcountries.eu/rest/v2/all";
const SEARCH_BY_NAME = "https://restcountries.eu/rest/v2/name/";

const initialState = {
  isLoading: false,
  countries: [],
  query: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await axios(ALL_URL);
      console.log(data);
      if (data.status === 200) {
        getCountries(data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setLoading = (loading) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  };

  const getCountries = (countries) => {
    dispatch({ type: "GET_COUNTRIES", payload: countries });
  };

  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(AppContext);

export default AppProvider;
