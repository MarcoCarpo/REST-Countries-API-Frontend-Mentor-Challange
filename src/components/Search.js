import React from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const Search = () => {
  return (
    <form className="search">
      <div className="search__input">
        <button type="submit">
          <FaSearch className="search__icon" />
        </button>
        <input type="text" placeholder="Search for a country... " />
      </div>
      <div className="search__select">
        <button>
          Filter by Region <FaAngleDown />
        </button>
        <div className="search__dropdown">
          <div className="search__dropdown-content">
            <button data-country="africa">Africa</button>
            <button data-country="africa">America</button>
            <button data-country="africa">Asia</button>
            <button data-country="africa">Europe</button>
            <button data-country="africa">Oceania</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Search;
