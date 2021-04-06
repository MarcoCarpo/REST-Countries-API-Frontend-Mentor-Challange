import { FaMoon, FaRegMoon } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Header = () => {
  const { setTheme, theme } = useGlobalContext();
  return (
    <header
      className="header"
      style={
        theme === "light-theme"
          ? { boxShadow: "0px 3px 2px 0px rgba(0, 0, 0, 0.05)" }
          : null
      }
    >
      <div className="header__content">
        <h1 className="header__title">Where in the world?</h1>
        <button className="header__dark-mode" onClick={setTheme}>
          {theme === "light-theme" ? <FaRegMoon /> : <FaMoon />}
          dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
