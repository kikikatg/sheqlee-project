import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/jobdetails/JobDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/about" element={<div />} />
      <Route path="/contact" element={<div />} />
      <Route path="/pricing" element={<div />} />
    </Routes>
  );
};

export default AppRoutes;
