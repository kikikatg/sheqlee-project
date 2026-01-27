import { useParams, Link } from "react-router-dom";
import JobDetailsNavbar from "./JobDetailsNavbar";
import Footer from "../../footer/Footer";
import { mockJobs } from "../../../data/mockJobs";
import { META_ICONS, JOB_ICONS } from "../../../constants/JobIcons";
import DeveloperCTA from "../../sections/DeveloperCTA";
import { useState } from "react";
const DEFAULT_TAGS = ["Java", "User Interface", "Python", "C++", "Flutter"];

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find((j) => String(j.id) === id);
  const [showFullDescription, setShowFullDescription] = useState(false);
  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Job not found</p>
      </main>
    );
  }

  const details = job.details;

  // 🔹 Normalize tags → always 6 items (1 icon + 5 tags)
  const normalizedTags = ["ICON", ...(details?.tags?.slice(0, 5) || [])];

  while (normalizedTags.length < 6) {
    normalizedTags.push(DEFAULT_TAGS[normalizedTags.length - 1]);
  }

  return (
    <main className="bg-white  min-h-screen">
      <JobDetailsNavbar job={job} />

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <img
            src={JOB_ICONS[job.title]}
            alt={job.title}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
            {job.title}
          </h1>
        </div>

        <div
          className="
    grid grid-cols-6 gap-x-2 gap-y-3
    justify-items-center
    max-w-[320px]
    mx-auto
    mb-10

    sm:flex sm:flex-wrap sm:justify-center sm:max-w-none
  "
        >
          {/* 1 */}
          <span className="meta-pill text-[13px] sm:text-[16px] col-span-2">
            <img src={META_ICONS.time} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {job.postedAt}
          </span>

          {/* 2 */}
          <span className="meta-pill text-[13px] sm:text-[16px] col-span-2">
            <img
              src={META_ICONS.company}
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            {job.company}
          </span>

          {/* 3 */}
          <span className="meta-pill text-[13px] sm:text-[16px] col-span-2">
            <img src={META_ICONS.type} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {job.type}
          </span>

          {/* 4 — centered left */}
          <span className="meta-pill text-[13px] sm:text-[16px] col-span-2 col-start-3">
            <img src="/icons/skill.svg" className="w-4 h-4 sm:hidden" />
            <img src={META_ICONS.level} className="w-4 h-4 hidden sm:block" />
            {job.level}
          </span>

          {/* 5 — right next to 4 */}
          <span className="meta-pill text-[13px] sm:text-[16px] col-span-2 col-start-5">
            <img src="/icons/money.svg" className="w-4 h-4 sm:hidden" />
            <img src={META_ICONS.price} className="w-4 h-4 hidden sm:block" />
            {job.rate}
          </span>
        </div>
      </section>
      <div className="flex flex-col items-center gap-3 mb-10 sm:mb-0">
        <Link
          to="/freelancer-signup"
          className="
   w-[180px] sm:w-[200px] lg:w-[280px] lg:h-[54px] md:w-[250px] md:h-[50px] 
h-[52px] sm:h-[40px]
text-[18px] sm:text-[22px]

      bg-[#8967B3]
      rounded-[15px]
      flex
      items-center
      justify-center
      text-white
      
      font-medium
      hover:opacity-90
      transition
    "
        >
          Apply now
        </Link>

        <p className="hidden sm:block text-[16px] text-[#555]">
          Please mention{" "}
          <Link to="/" className="font-semibold text-black">
            Sheqlee
          </Link>{" "}
          when you apply.
        </p>
      </div>

      {/* ================= DESCRIPTION ================= */}
      {details && (
        <section className="flex justify-center pb-10 mt-14 px-[10px] mx-6 sm:px-0">
          <div className="relative w-full max-w-[1200px] bg-[#F7F7F7] rounded-[20px] px-4 sm:px-14 py-10 sm:py-16">
            {/* Intro text — collapsible on mobile */}
            <p
              className={`text-[15px] sm:text-[22px] leading-[28px] sm:leading-[32px] mb-14 transition-all duration-300`}
              style={{
                maxHeight: showFullDescription ? "1000px" : "84px",
                overflow: "hidden",
              }}
            >
              {details.intro}
            </p>

            {/* Read more — mobile only */}
            <div className="absolute bottom-4 right-4 sm:hidden">
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="
            flex items-center gap-2
            px-4 py-2
            bg-[#8967B3]
            rounded-[10px]
            shadow-sm
          "
              >
                <span className="text-[14px] font-medium text-white">
                  {showFullDescription ? "Show less" : "Read more"}
                </span>
                <img
                  src="/icons/Group 4 (1).svg"
                  alt="Read more"
                  className="w-4 h-4"
                />
              </button>
            </div>

            {/* Rest of sections */}
            {[
              ["QUALIFICATIONS", details.qualifications],
              ["EXPERIENCE", details.experience],
              ["SKILLS & KNOWLEDGE", details.skillsAndKnowledge],
            ].map(([title, items]) => (
              <div key={title}>
                <h3 className="text-[24px] font-semibold mb-6">{title}</h3>
                <ul className="space-y-2 sm:space-y-3 mb-10 sm:mb-14 text-[15px] sm:text-[22px]">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TAGS ================= */}
      <section className="flex justify-center pb-20">
        <div
          className="
    grid grid-cols-4 gap-x-2 gap-y-2
    max-w-[360px] mx-auto justify-items-center

    sm:flex sm:flex-nowrap sm:justify-center sm:max-w-none
  "
        >
          {normalizedTags.map((tag, index) =>
            index === 0 ? (
              <div
                key={index}
                className="w-[40px] h-[40px] bg-black rounded-[5px] flex items-center justify-center"
              >
                <img src="/icons/tags.svg" alt="Tags" className="w-5 h-5" />
              </div>
            ) : (
              <Link
                key={index}
                to={`/tags/${encodeURIComponent(tag)}`}
                className={`
            text-[14px] sm:text-[18px]
            h-[34px] sm:h-[40px]
            px-3
            bg-[#DFDFDF]
            rounded-[5px]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:bg-[#8967B3]
            hover:text-white
            transition

            ${index === 4 ? "col-start-2" : ""}
            ${index === 5 ? "col-start-3" : ""}
          `}
              >
                {tag}
              </Link>
            ),
          )}
        </div>
      </section>

      <div className="flex flex-col items-center gap-6 text-center">
        {/* APPLY NOW BUTTON */}
        <Link
          to="/freelancer-signup"
          className="
        w-[180px] sm:w-[200px] lg:w-[280px] lg:h-[54px] md:w-[250px] md:h-[50px] 
h-[52px] sm:h-[40px]
text-[18px] sm:text-[22px]
      bg-[#8967B3]
      rounded-[15px]
      flex
      items-center
      justify-center
      text-white
      font-medium
      hover:opacity-90
      transition
    "
        >
          Apply now
        </Link>

        {/* PLEASE MENTION TEXT - hidden on mobile only */}
        <p className="text-[16px] text-[#555] hidden sm:block">
          Please mention{" "}
          <Link to="/" className="font-semibold text-black">
            Sheqlee
          </Link>{" "}
          when you apply.
        </p>

        {/* SHARE & SOCIALS */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[18px] text-[#444444]">Share with others</p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="/icons/socials.svg"
              alt="Socials"
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default JobDetails;
