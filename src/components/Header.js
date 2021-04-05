import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button className="header__dark-mode">
        <FaMoon />
        dark mode
      </button>
    </header>
  );
};

export default Header;
