import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { countries } = useGlobalContext();
  const regions = [
    "All Regions",
    ...Array.from(new Set(countries.map((country) => country.region))).filter(
      (region) => region
    ),
  ];

  return (
    <form className="search">
      <div className="search__content">
        <div className="search__input">
          <button type="submit">
            <FaSearch className="search__icon" />
          </button>
          <input type="text" placeholder="Search for a country... " />
        </div>
        <div className="search__select">
          <select>
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
