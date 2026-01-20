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
      className="w-[52px] sm:w-[63px] h-[26px] sm:h-[28px] rounded-[7px] flex items-center px-[4px] cursor-pointer"
      style={{ border: `3px solid ${color}` }}
    >
      <div className={`flex w-full ${dotPosition}`}>
        <div
          className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] rounded-[7px]"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};
const ActionIcon = ({ icon, label, onClick }) => (
  <div className="relative group flex-shrink-0">
    <div
      onClick={onClick}
      className="
        w-[50px] sm:w-[63px] h-[45px] sm:h-[53px]
        bg-[#8967B3] rounded-[7px]
        flex items-center justify-center cursor-pointer
      "
    >
      <img src={`/icons/${icon}`} className="w-5 sm:w-6 h-5 sm:h-6" />
    </div>

    <span
      className="
        absolute top-[48px] sm:top-[55px] left-1/2 -translate-x-1/2
        bg-[#DFDFDF] px-3 py-[2px] rounded-[5px]
        text-[12px] sm:text-[14px]
        opacity-0 group-hover:opacity-100
        transition whitespace-nowrap
      "
    >
      {label}
    </span>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
const DashboardDetail = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("publishedJobs")) || [];
    setJobs(stored);
  }, []);

  const saveJobs = (updated) => {
    setJobs(updated);
    localStorage.setItem("publishedJobs", JSON.stringify(updated));
  };

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

  const duplicateJob = (job) => {
    const copy = { ...job, id: Date.now(), status: "Draft" };
    saveJobs([copy, ...jobs]);
  };

  const publishJob = (id) => {
    saveJobs(
      jobs.map((j) => (j.id === id ? { ...j, status: "Published" } : j))
    );
  };

  const deleteJob = (id) => {
    saveJobs(jobs.filter((j) => j.id !== id));
  };

  const editJob = (job) => {
    navigate("/company/post-job", { state: { job, mode: "edit" } });
  };

  const viewJob = (job) => {
    navigate("/company/post-job/review", { state: { jobId: job.id } });
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* HEADER */}
      <section className="flex flex-col items-center mt-6 px-4 text-center">
        <img src="/icons/dashboard.svg" className="w-[54px] sm:w-[74px]" />
        <h1 className="mt-6 sm:mt-[41px] text-[32px] sm:text-[60px] font-semibold">
          Dashboard
        </h1>
        <p className="mt-4 sm:mt-[25px] text-[18px] sm:text-[35px] leading-6 sm:leading-[40px]">
          All the jobs you have posted and <br className="hidden sm:block" />
          are about to post.
        </p>
      </section>
      {/* DESKTOP TABLE */}
      <section className="hidden lg:flex mt-20 justify-center mx-12 mb-20">
        {/* Scrollable wrapper for 1024px–1086px */}
        <div
          className="
      w-full overflow-x-auto
      lg:[@media(min-width:1024px)_and_(max-width:1086px)]:overflow-x-auto
    "
        >
          {/* Inner container holding the grid */}
          <div className="min-w-[1300px] bg-[#F7F7F7] md:min-w-[1200px]  rounded-[20px]">
            {/* HEADER */}
            <div className="h-[90px] bg-[#E6E6E6] rounded-t-[20px] grid grid-cols-[80px_320px_120px_120px_120px_300px] items-center px-8 text-[20px] font-medium">
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
                className="grid grid-cols-[80px_320px_120px_120px_120px_360px] items-center px-8 h-[110px] border-b border-[#DFDFDF]"
              >
                <span>{index + 1}</span>
                <span className="truncate">{job.title}</span>
                <span>{job.type}</span>
                <span>{normalizeLevel(job.level)}</span>

                <StatusPill
                  status={job.status}
                  onClick={() => toggleStatus(job.id)}
                />

                {/* ACTIONS — UNCHANGED */}
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
        </div>
      </section>

      {/* MOBILE / TABLET CARDS */}
      <section className="lg:hidden px-4 mt-10 mb-20 space-y-4">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className="bg-[#F7F7F7] rounded-[16px] p-4 space-y-3"
          >
            {/* TOP ROW */}
            <div className="flex justify-between items-center gap-3">
              <span className="font-semibold text-[16px] break-words">
                #{index + 1} — {job.title}
              </span>

              <StatusPill
                status={job.status}
                onClick={() => toggleStatus(job.id)}
              />
            </div>

            {/* META */}
            <div className="text-[14px] text-[#555] space-y-1">
              <p>
                <span className="font-medium">Type:</span> {job.type}
              </p>
              <p>
                <span className="font-medium">Level:</span>{" "}
                {normalizeLevel(job.level)}
              </p>
            </div>

            {/* ACTIONS — SAME LOGIC */}
            <div className="flex flex-wrap gap-3 pt-2">
              <ActionIcon
                icon="duplicate.svg"
                label="Duplicate vacancy"
                onClick={() => duplicateJob(job)}
              />

              {job.status === "Draft" && (
                <>
                  <button
                    onClick={() => publishJob(job.id)}
                    className="px-4 h-[42px] bg-black text-white rounded-[7px]"
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
      </section>

      <Footer />
    </main>
  );
};

export default DashboardDetail;
