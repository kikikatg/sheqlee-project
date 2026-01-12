import { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useNavigate } from "react-router-dom";

/* ---------------- STATUS PILL ---------------- */
const normalizeLevel = (level) => {
  const map = {
    junior: "Middle",
    intermediate: "Senior",
    expert: "Lead",
    Junior: "Middle",
    Intermediate: "Senior",
    Expert: "Lead",
  };

  return map[level] || level;
};

const StatusPill = ({ status, onClick }) => {
  const map = {
    Draft: { color: "#444444", position: "center" },
    Published: { color: "#11B949", position: "right" },
    Closed: { color: "#F32424", position: "left" },
  };

  const { color, position } = map[status];

  const dotPosition =
    position === "left"
      ? "justify-start"
      : position === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      onClick={onClick}
      className="w-[63px] h-[28px] rounded-[7px] flex items-center px-[4px] cursor-pointer"
      style={{ border: `3px solid ${color}` }}
    >
      <div className={`flex w-full ${dotPosition}`}>
        <div
          className="w-[20px] h-[20px] rounded-[7px]"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};

/* ---------------- ACTION ICON ---------------- */
const ActionIcon = ({ icon, label, onClick }) => (
  <div className="relative group">
    <div
      onClick={onClick}
      className="w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center cursor-pointer"
    >
      <img src={`/icons/${icon}`} className="w-6 h-6" />
    </div>

    {/* Hover label */}
    <span className="absolute top-[55px] left-1/2 -translate-x-1/2 bg-[#DFDFDF] px-3 py-[2px] rounded-[5px] text-[14px] opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {label}
    </span>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const DashboardDetail = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  /* Load jobs */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("publishedJobs")) || [];
    setJobs(stored);
  }, []);

  /* Persist */
  const saveJobs = (updated) => {
    setJobs(updated);
    localStorage.setItem("publishedJobs", JSON.stringify(updated));
  };

  /* Status toggle */
  const toggleStatus = (id) => {
    const updated = jobs.map((job) => {
      if (job.id !== id) return job;

      const next =
        job.status === "Draft"
          ? "Published"
          : job.status === "Published"
          ? "Closed"
          : "Draft";

      return { ...job, status: next };
    });

    saveJobs(updated);
  };

  /* Actions */
  const duplicateJob = (job) => {
    const copy = {
      ...job,
      id: Date.now(),
      status: "Draft",
    };
    saveJobs([copy, ...jobs]);
  };

  const publishJob = (id) => {
    const updated = jobs.map((j) =>
      j.id === id ? { ...j, status: "Published" } : j
    );
    saveJobs(updated);
  };

  const deleteJob = (id) => {
    saveJobs(jobs.filter((j) => j.id !== id));
  };

  const editJob = (job) => {
    navigate("/user/post-job", {
      state: { job, mode: "edit" },
    });
  };
  const viewJob = (job) => {
    navigate("/post-job/review", {
      state: { jobId: job.id }, // pass only ID
    });
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* HEADER */}
      <section className="flex flex-col items-center mt-6">
        <img src="/icons/dashboard.svg" className="w-[74px]" />
        <h1 className="mt-[41px] text-[60px] font-semibold">Dashboard</h1>
        <p className="mt-[25px] text-center text-[35px] leading-[40px]">
          All the jobs you have posted and <br /> are about to post.
        </p>
      </section>

      {/* TABLE */}
      <section className="mt-20 flex justify-center mx-12 mb-20 overflow-x-auto">
        <div className="w-[1782px] bg-[#F7F7F7] rounded-[20px]">
          {/* HEADER */}
          <div className="h-[90px] bg-[#E6E6E6] rounded-t-[20px] grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 text-[20px] font-medium">
            <span>JID</span>
            <span>Title</span>
            <span>Type</span>
            <span>Level</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* ROWS */}
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 h-[110px] border-b border-[#DFDFDF]"
            >
              <span>{index + 1}</span>
              <span>{job.title}</span>
              <span>{job.type}</span>
              <span>{normalizeLevel(job.level)}</span>

              <StatusPill
                status={job.status}
                onClick={() => toggleStatus(job.id)}
              />

              {/* ACTIONS */}
              <div className="flex gap-4 items-center">
                <ActionIcon
                  icon="duplicate.svg"
                  label="Duplicate vacancy"
                  onClick={() => duplicateJob(job)}
                />

                {job.status === "Draft" && (
                  <>
                    <button
                      onClick={() => publishJob(job.id)}
                      className="w-[166px] h-[53px] bg-black text-white rounded-[7px]"
                    >
                      Publish
                    </button>

                    <ActionIcon
                      icon="edit.svg"
                      label="Edit draft"
                      onClick={() => editJob(job)}
                    />
                  </>
                )}

                {job.status !== "Draft" && (
                  <ActionIcon
                    icon="view.svg"
                    label="View details"
                    onClick={() => viewJob(job)}
                  />
                )}

                <ActionIcon
                  icon="delete.svg"
                  label="Delete vacancy"
                  onClick={() => deleteJob(job.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DashboardDetail;
