import { useNavigate } from "react-router-dom";
import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("publishedJobs")) || [];

    if (jobs.length > 0) {
      navigate("/company/dashboard/history");
    }
  }, [navigate]);

  return (
    <main className="bg-white min-h-screen flex flex-col ">
      <div className="hidden sm:block">
        <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />
      </div>
      {/* DASHBOARD ICON */}
      <div className="flex flex-col items-center mb-16">
        <div className="mt-10">
          <img
            src="/icons/dashboard.svg"
            alt="Dashboard"
            className="w-12 h-12"
          />
        </div>

        {/* DASHBOARD TITLE */}
        <h1
          className="
           mt-4 lg:mt-12 sm:mt-6 md:mt-8
          text-[50px]
          font-semibold
          text-black
        "
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          Dashboard
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
          mt-0 lg:mt-10 sm:mt-4 md:mt-6
          max-w-[632px]
          text-center
          text-[20px] lg:text-[35px] md:text-[26px] sm:text-[22px]
          leading-[26px] lg:leading-[40px]
          text-black md:leading-[32px] sm:leading-[28px]
        "
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          You have not posted any jobs yet. Get started by posting a job.
        </p>
        <p className="block  sm:hidden text-[14px] mt-10 ">
          You can only post jobs on desktop.
        </p>
        {/* POST FIRST JOB BUTTON */}
        <button
          onClick={() => navigate("/company/post-job")}
          className="hidden sm:block
    mt-[81px]
    w-[370px]
    h-[85px]
    bg-[#8967B3]
    rounded-[15px]
   
    items-center
    justify-center
    hover:opacity-90
    transition
  "
        >
          <span
            className="
            text-[30px]
            font-medium
            text-[#F8F8F8]
          "
            style={{ fontFamily: "Kantumruy Pro" }}
          >
            Post your first job
          </span>
        </button>
      </div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
};

export default Dashboard;
