import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../pages/Jobdetails/JobDetails";
import Categories from "../pages/categories/Categories"; 
import CategoryJobs from "../pages/categories/CategoryJobs";
import AllTags from "../pages/AllTags";
import TagJobs from "../pages/tags/TagJobs";
import Clients from "../pages/clients/Clients";
import Companies from "../pages/companies/Companies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/about" element={<div />} />
      <Route path="/contact" element={<div />} />
      <Route path="/pricing" element={<div />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<CategoryJobs />} />
      <Route path="/tags" element={<AllTags />} />
      <Route path="/tags/:tagName" element={<TagJobs />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/companies" element={<Companies />} />

    </Routes>
  );
};

export default AppRoutes;
