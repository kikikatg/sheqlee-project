import { Routes, Route,Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/about" element={<div />} />
      <Route path="/contact" element={<div />} />
      <Route path="/pricing" element={<div />} />
    </Routes>
  );
};

export default AppRoutes;
