import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  );
};

export default GuestLayout;
