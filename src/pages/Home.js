import { Search, CountryItem } from "../components";

const Home = () => {
  return (
    <main className="home">
      <Search />
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
