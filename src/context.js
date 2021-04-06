import React from "react";
import { reducer } from "./reducer";
import axios from "axios";

const ls = window.localStorage;
if (!ls.getItem("theme")) {
  ls.setItem("theme", "dark-theme");
}

const AppContext = React.createContext();

// Rest Countries API Endpoints
const ALL_URL = "https://restcountries.eu/rest/v2/all";

const initialState = {
  isLoading: false,
  countries: [],
  query: "",
  filter: "Filter by Region",
  theme: ls.getItem("theme"),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const fetchData = React.useCallback(async () => {
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
  }, []);

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

  const setTheme = () => {
    dispatch({ type: "SET_THEME" });
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  React.useEffect(() => {
    ls.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setQuery,
        fetchData,
        setFilter,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(AppContext);

export default AppProvider;
