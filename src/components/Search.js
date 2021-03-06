import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const {
    countries,
    query,
    setQuery,
    setFilter,
    theme,
    filter,
  } = useGlobalContext();
  const regions = [
    "Filter by Region",
    ...Array.from(new Set(countries.map((country) => country.region))).filter(
      (region) => region
    ),
  ];

  const submitHandler = (e) => {
    setQuery(e.target.value);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <div className="search__content">
        <div
          className="search__input"
          style={
            theme === "light-theme"
              ? { boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)" }
              : null
          }
        >
          <FaSearch className="search__icon" />

          <input
            aria-label="search"
            type="text"
            placeholder="Search for a country... "
            value={query}
            onChange={(e) => submitHandler(e)}
          />
        </div>
        <div className="search__select">
          <select onChange={(e) => filterHandler(e)}>
            {regions.map((region, index) => {
              return (
                <option
                  key={index}
                  value={region}
                  defaultValue={region === filter && "selected"}
                  aria-label="option"
                >
                  {region}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default Search;
