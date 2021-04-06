import { useGlobalContext } from "../context";
import { Search, CountryItem } from "../components";
import Loading from "../components/Loading";

const Home = () => {
  const { countries, isLoading, query, filter, theme } = useGlobalContext();

  return (
    <main className="home">
      <Search />
      {isLoading && <Loading />}
      {!isLoading && countries && (
        <section className="home__countries">
          {countries
            .filter((country) => {
              if (filter === "All Regions") return country;
              return country.region === filter;
            })
            .filter((country) =>
              country.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((country) => {
              const { alpha3Code } = country;
              return <CountryItem key={alpha3Code} {...country} />;
            })}
        </section>
      )}
    </main>
  );
};

export default Home;
