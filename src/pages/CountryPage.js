import { useParams, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useGlobalContext } from "../context";

const CountryPage = () => {
  const { id } = useParams();
  const { countries, theme } = useGlobalContext();
  const country = countries.find((country) => country.alpha3Code === id);

  const {
    name,
    flag,
    capital,
    subregion,
    population,
    nativeName,
    region,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  const borderCountries = borders.map((borderCountry) => {
    const borderCountryInfo = countries.find(
      (country) => country.alpha3Code === borderCountry
    );
    return {
      name: borderCountryInfo.name,
      alpha3Code: borderCountryInfo.alpha3Code,
    };
  });

  return (
    <main className="country">
      <Link to="/">
        <button
          className="error__btn"
          style={
            theme === "light-theme"
              ? { boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)" }
              : null
          }
        >
          <FaLongArrowAltLeft /> Back
        </button>
      </Link>

      <section className="country__content">
        <div className="country__image">
          <img src={flag} alt={name} />
        </div>
        <div className="country__info">
          <h2 className="country__name">{name}</h2>
          <div className="country__main">
            <div className="country__top-info">
              <p>
                <strong>Native Name</strong>: {nativeName}
              </p>
              <p>
                <strong>Population</strong>: {population}
              </p>
              <p>
                <strong>Region</strong>: {region}
              </p>
              <p>
                <strong>Sub-Region</strong>: {subregion}
              </p>
              <p>
                <strong>Capital</strong>: {capital}
              </p>
            </div>
            <div className="country__middle-info">
              <p>
                <strong>Top Level Domain</strong>:{" "}
                {topLevelDomain || "no domain"}
              </p>
              <p>
                <strong>Currencies</strong>:{" "}
                {currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <strong>Languages</strong>:{" "}
                {languages.map((language) => language.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="country__borders">
            <h3 className="country__borders-title">Border Countries:</h3>
            <div className="country__borders-content">
              {borderCountries.length > 0 ? (
                borderCountries.map((country, index) => {
                  return (
                    <Link
                      to={`/countries/${country.alpha3Code}`}
                      key={country.alpha3Code}
                    >
                      <button
                        className="country__btn"
                        style={
                          theme === "light-theme"
                            ? {
                                boxShadow:
                                  "0px 3px 2px 0px rgba(0, 0, 0, 0.05)",
                              }
                            : null
                        }
                      >
                        {country.name}
                      </button>
                    </Link>
                  );
                })
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
