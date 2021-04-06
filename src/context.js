import React from "react";
import { reducer } from "./reducer";
import axios from "axios";

//MOCK DATA BEFORE API
import countries from "./mock/mockCountries";

const AppContext = React.createContext();

// Rest Countries API Endpoints
const ALL_URL = "https://restcountries.eu/rest/v2/all";

const initialState = {
  isLoading: false,
  countries: [],
  query: "",
  filter: "All Regions",
  theme: "dark-theme",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      const data = await axios(ALL_URL);
      if (data.status === 200) {
        getCountries(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  const setFilter = (region) => {
    dispatch({ type: "SET_FILTER", payload: region });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, setQuery, fetchData, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(AppContext);

export default AppProvider;
