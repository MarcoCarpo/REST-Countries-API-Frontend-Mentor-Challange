export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };

    case "SET_QUERY":
      return { ...state, query: action.payload };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: state.theme === "light-theme" ? "dark-theme" : "light-theme",
      };

    default:
      return state;
  }
};
