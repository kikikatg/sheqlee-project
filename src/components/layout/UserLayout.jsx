import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Footer from "../footer/Footer";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
     
    </>
  );
};

export default UserLayout;
