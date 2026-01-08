import { Outlet } from "react-router-dom";
import UpdateProfileNavbar from "./UpdateProfileNavbar";
import Footer from "../footer/Footer";

const UpdateProfileLayout = () => {
  return (
    <>
      <UpdateProfileNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default UpdateProfileLayout;
