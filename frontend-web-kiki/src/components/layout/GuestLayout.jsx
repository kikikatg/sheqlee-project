import { Outlet } from "react-router-dom";
import GuestNavbar from "./GuestNavbar";

const GuestLayout = () => {
  return (
    <>
      <GuestNavbar />
      <Outlet />
    </>
  );
};

export default GuestLayout;
