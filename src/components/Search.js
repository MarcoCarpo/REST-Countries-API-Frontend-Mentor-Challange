import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { countries, query, setQuery, setFilter } = useGlobalContext();
  const regions = [
    "All Regions",
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
        <div className="search__input">
          <FaSearch className="search__icon" />

          <input
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
                <option key={index} value={region}>
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
