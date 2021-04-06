import { useGlobalContext } from "../context";
import { Search, CountryItem } from "../components";
import Loading from "../components/Loading";

const Home = () => {
  const { countries, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="home">
      <Search />
      <section className="home__countries">
        {countries.map((country) => {
          const { alpha3Code } = country;
          return <CountryItem key={alpha3Code} {...country} />;
        })}
      </section>
    </main>
  );
};

export default Home;
