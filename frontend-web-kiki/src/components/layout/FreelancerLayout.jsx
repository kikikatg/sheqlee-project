import { Outlet } from "react-router-dom";
import FreelancerNavbar from "./FreelancerNavbar";
import Footer from "../footer/Footer";

const FreelancerLayout = () => {
  return (
    <>
      <FreelancerNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default FreelancerLayout;
