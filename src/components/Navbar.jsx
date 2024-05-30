import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-stone-50">
      <div className="grow">
        <Link to="/">
          <img src={logo} alt="" className="max-w-24 px-4" />
        </Link>
      </div>
      <Link className="p-4 text-lg font-semibold" to="/authors">
        Authors
      </Link>
      <Link className="p-4 text-lg font-semibold" to="/join">
        Join
      </Link>
    </nav>
  );
};
export default Navbar;
