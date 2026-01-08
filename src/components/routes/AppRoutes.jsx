import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import UserLayout from "../layout/UserLayout";
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
import ResetPassword from "../auth/ResetPassword";
import SetNewPassword from "../auth/SetNewPassword";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import NotFound from "../pages/not-found/NotFound";
import PostJob from "../pages/user/PostJob";
import UserHome from "../pages/user/UserHome";
import ReviewPublish from "../pages/user/ReviewPublish";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardDetail from "../pages/dashboard/DashboardDetail";
import CompanyProfile from "../pages/company-profile/CompanyProfile";
import AccountSetting from "../pages/account-setting/AccountSetting";
import UpdateProfileLayout from "../layout/UpdateProfileLayout";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import DashboardUser from "../pages/dashboard/DashboardUser";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ---------------- GUEST ROUTES ---------------- */}
      <Route element={<GuestLayout />}>
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
        <Route
          path="/freelancer-signup"
          element={<ProfessionalRegistration />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Route>
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/post-job" element={<PostJob />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post-job/review" element={<ReviewPublish />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/detail" element={<DashboardDetail />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/account-setting" element={<AccountSetting />} />
      </Route>
      {/* Update Profile Route */}
      <Route element={<UpdateProfileLayout />}>
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/dashboard-user" element={<DashboardUser />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
