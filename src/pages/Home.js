import { Search, Filter, CountryItem } from "../components";

const Home = () => {
  return (
    <main className="home">
      <section className="home__search-filter">
        <Search />
        <Filter />
      </section>
      <section className="home__countries">
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </section>
    </main>
  );
};

export default Home;
