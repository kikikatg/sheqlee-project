import { Outlet } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";

const UserLayout = () => {
  return (
    <>
      <CompanyNavbar />
      <Outlet />
    </>
  );
};

export default UserLayout;
