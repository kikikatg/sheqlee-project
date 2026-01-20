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
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* DASHBOARD ICON */}
      <div className="flex flex-col items-center mb-24">
        <div className="mt-6">
          <img
            src="/icons/dashboard.svg"
            alt="Dashboard"
            className="w-[74px] h-[74px]"
          />
        </div>

        {/* DASHBOARD TITLE */}
        <h1
          className="
          mt-[41px]
          text-[60px]
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
          mt-[25px]
          max-w-[632px]
          text-center
          text-[35px]
          leading-[40px]
          text-black
        "
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          You have not posted any jobs yet. Get started by posting a job.
        </p>

        {/* POST FIRST JOB BUTTON */}
        <button
          onClick={() => navigate("/dashboard/detail")}
          className="
    mt-[81px]
    w-[370px]
    h-[85px]
    bg-[#8967B3]
    rounded-[15px]
    flex
    items-center
    justify-center
    hover:opacity-90
    transition
  "
        >
          <span
            className="
            text-[35px]
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
