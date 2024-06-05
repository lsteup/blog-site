import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};
export default Landing;
