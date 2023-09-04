import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-24 pb-20">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
