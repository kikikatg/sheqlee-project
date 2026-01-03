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
import CompanyDetails from "../pages/company-details/CompanyDetails";
import Contact from "../pages/contacts/Contact";
import FAQ from "../pages/faq/FAQ";
import CompanyRegistration from "../pages/company-registration/CompanyRegistration";
import ProfessionalRegistration from "../pages/professional-registration/ProfessionalRegistration";
import Login from "../auth/Login";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-jobs" element={<AllJobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<CategoryJobs />} />
      <Route path="/tags" element={<AllTags />} />
      <Route path="/tags/:tagName" element={<TagJobs />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:slug" element={<CompanyDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/company-signup" element={<CompanyRegistration />} />
      <Route path="/freelancer-signup" element={<ProfessionalRegistration />} />
     <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
