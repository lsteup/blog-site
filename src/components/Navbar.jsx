import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full text-stone-500 sticky top-0 pr-4  justify-between border-b border-stone-150 box-border items-center p-2 sm:p-4 gap-8 xl:text-lg  ">
      <Link className="grow" to="/dashboard">
        {" "}
        <img className="max-h-10 2xl:max-h-16  ml-2" src={logo} alt="" />
      </Link>

      <Link className=" md:block md:border-s-black">Join</Link>
      <Link to="/authors" className=" md:block md:border-s-black text-black ">
        Authors
      </Link>
    </nav>
  );
};
export default Navbar;
