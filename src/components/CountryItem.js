import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

// From https://www.w3resource.com/javascript-exercises/javascript-math-exercise-39.php
const thousands_separators = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
};

const CountryItem = ({
  flag,
  name,
  population,
  region,
  capital,
  alpha3Code,
}) => {
  const { theme } = useGlobalContext();
  return (
    <article
      className="country-item"
      style={
        theme === "light-theme"
          ? { boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)" }
          : null
      }
    >
      <div className="country-item__image-container">
        <img src={flag} alt="" />
      </div>
      <div className="country-item__content">
        <header className="country-item__name">
          <h4>
            <Link to={`/countries/${alpha3Code}`}>{name}</Link>
          </h4>
        </header>
        <div className="country-item__info">
          <p>
            <strong>Population</strong>: {thousands_separators(population)}
          </p>
          <p>
            <strong>Region</strong>: {region}
          </p>
          <p>
            <strong>Capital</strong>: {capital}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryItem;
