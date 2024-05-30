import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <Link to="/">Home</Link>
      <Link to="/authors">Authors</Link>
      <Link to="/join">Join</Link>
    </nav>
  );
};
export default Navbar;
