import { FaMoon, FaRegMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">where in the world?</h1>
        <button className="header__dark-mode">
          <FaMoon />
          darkmode
        </button>
      </div>
    </header>
  );
};

export default Header;
