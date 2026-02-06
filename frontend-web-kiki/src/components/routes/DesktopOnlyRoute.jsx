import { Navigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

const DesktopOnlyRoute = ({ children }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Redirect mobile users to a safe page
    return <Navigate to="/company/homepage" replace />;
  }

  return children;
};

export default DesktopOnlyRoute;
