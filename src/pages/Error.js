import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h2 className="error__title">404</h2>
      <p className="error__desc">Page not found! :(</p>
      <Link to="/">
        <button className="error__btn">
          <FaLongArrowAltLeft /> Back
        </button>
      </Link>
    </section>
  );
};

export default Error;
