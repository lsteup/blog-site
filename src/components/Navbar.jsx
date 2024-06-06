import { Link } from "react-router-dom";
import logo from "/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full z-20 sticky top-0 pr-4  justify-between border-b border-stone-150 box-border items-center p-2 gap-8 xl:text-lg  ">
      <Link className="grow" to="/">
        {" "}
        <img className="max-h-10 2xl:max-h-10  ml-2" src={logo} alt="" />
      </Link>

      <Link to="/authors" className=" md:block md:border-s-black text-black ">
        Authors
      </Link>
      <Link
        to="https://blog-user-site.vercel.app/"
        className=" md:block md:border-s-black"
      >
        <Button text={"Join the Team"} />
      </Link>
    </nav>
  );
};
export default Navbar;
