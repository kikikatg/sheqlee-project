import { Outlet } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";

const CompanyLayout = () => {
  return (
    <>
      <CompanyNavbar />
      <Outlet />
    </>
  );
};

export default CompanyLayout;
