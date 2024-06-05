import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Landing;
