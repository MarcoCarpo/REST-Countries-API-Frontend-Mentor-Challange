import { useGlobalContext } from "../context";
import { Search, CountryItem } from "../components";

const Home = () => {
  const { countries } = useGlobalContext();
  console.log(countries);

  return (
    <main className="home">
      <Search />
      <section className="home__countries">
        {countries.map((country) => {
          const { numericCode } = country;
          return <CountryItem key={numericCode} {...country} />;
        })}
      </section>
    </main>
  );
};

export default Home;
