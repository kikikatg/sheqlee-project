import { Routes, Route } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import CompanyLayout from "../layout/CompanyLayout.jsx";
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
import TermsAndConditions from "../pages/privacy-policy/TermsAndConditions";
import CookiePolicy from "../pages/privacy-policy/CookiePolicy";
import NotFound from "../pages/not-found/NotFound";
import PostJob from "../pages/user/PostJob";
import CompanyHomePage from "../pages/user/CompanyHomePage.jsx";
import ReviewPublish from "../pages/user/ReviewPublish";
import CompanyDashboard from "../pages/dashboard/CompanyDashboard";
import CompanyDashboardHistory from "../pages/dashboard/CompanyDashboardHistory";
import CompanyProfile from "../pages/company-profile/CompanyProfile";
import CompanyAccountSetting from "../pages/account-setting/CompanyAccountSetting.jsx";
import FreelancerLayout from "../layout/FreelancerLayout.jsx";
import FreelancerHomePage from "../pages/update-profile/FreelancerHomePage.jsx";
import FreelancerDashboard from "../pages/dashboard/FreelancerDashboard.jsx";
import FreelancerEditProfile from "../pages/update-profile/FreelancerEditProfile.jsx";
import FreelancerAccountSetting from "../pages/account-setting/FreelancerAccountSetting.jsx";
import FreelancerProfilePreview from "../pages/update-profile/FreelancerProfilePreview.jsx";
import FreelancerPrintProfile from "../pages/update-profile/FreelancerPrintProfile.jsx";
import VerifyEmail from "../auth/VerifyEmail";
import JobTemplates from "../pages/user/JobTemplates";

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
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Route>
      {/* User Routes */}
      <Route path="/company" element={<CompanyLayout />}>
        <Route path="homepage" element={<CompanyHomePage />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="post-job/review" element={<ReviewPublish />} />
        <Route path="dashboard" element={<CompanyDashboard />} />
        <Route path="dashboard/history" element={<CompanyDashboardHistory />} />
        <Route path="profile" element={<CompanyProfile />} />
        <Route path="account-setting" element={<CompanyAccountSetting />} />
        <Route path="job-templates" element={<JobTemplates />} />
      </Route>

      {/* Update Profile Route */}
      <Route element={<FreelancerLayout />}>
        <Route path="/freelancer/homepage" element={<FreelancerHomePage />} />
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
        <Route
          path="/freelancer/edit-profile"
          element={<FreelancerEditProfile />}
        />
        <Route
          path="/freelancer/account-setting"
          element={<FreelancerAccountSetting />}
        />
        <Route
          path="freelancer/profile-preview"
          element={<FreelancerProfilePreview />}
        />
      </Route>
      <Route
        path="/freelancer/print-profile"
        element={<FreelancerPrintProfile />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
