import { useParams, Link } from "react-router-dom";
import JobDetailsNavbar from "./JobDetailsNavbar";
import Footer from "../../footer/Footer";
import { mockJobs } from "../../../data/mockJobs";
import { META_ICONS, JOB_ICONS } from "../../../constants/JobIcons";
import DeveloperCTA from "../../sections/DeveloperCTA";

const DEFAULT_TAGS = ["Java", "User Interface", "Python", "C++", "Flutter"];

const JobDetails = () => {
  const { id } = useParams();
  const job = mockJobs.find((j) => String(j.id) === id);

  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Job not found</p>
      </main>
    );
  }

  const details = job.details;

  // 🔹 Normalize tags → always 6 items (1 icon + 5 tags)
  const normalizedTags = [
    "ICON",
    ...(details?.tags?.slice(0, 5) || []),
  ];

  while (normalizedTags.length < 6) {
    normalizedTags.push(DEFAULT_TAGS[normalizedTags.length - 1]);
  }

  return (
    <main className="bg-white min-h-screen">
      <JobDetailsNavbar job={job} />

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <img
            src={JOB_ICONS[job.title]}
            alt={job.title}
            className="w-16 h-16"
          />
          <h1 className="text-4xl font-semibold">{job.title}</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <span className="meta-pill text-[16px]">
            <img src={META_ICONS.time} className="w-4 h-4" />
            {job.postedAt}
          </span>
          <span className="meta-pill text-[16px]">
            <img src={META_ICONS.company} className="w-4 h-4" />
            {job.company}
          </span>
          <span className="meta-pill text-[16px]">
            <img src={META_ICONS.type} className="w-4 h-4" />
            {job.type}
          </span>
          <span className="meta-pill text-[16px]">
            <img src={META_ICONS.level} className="w-4 h-4" />
            {job.level}
          </span>
          <span className="meta-pill text-[16px]">
            <img src={META_ICONS.price} className="w-4 h-4" />
            {job.rate}
          </span>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      {details && (
        <section className="flex justify-center pb-32">
          <div className="w-full max-w-[1200px] bg-[#F7F7F7] rounded-[20px] px-14 py-16">
            <p className="text-[22px] leading-[32px] mb-14">
              {details.intro}
            </p>

            {[
              ["QUALIFICATIONS", details.qualifications],
              ["EXPERIENCE", details.experience],
              ["SKILLS & KNOWLEDGE", details.skillsAndKnowledge],
            ].map(([title, items]) => (
              <div key={title}>
                <h3 className="text-[28px] font-semibold mb-6">{title}</h3>
                <ul className="space-y-3 mb-14 text-[22px]">
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
      <section className="flex justify-center pb-14">
        <div className="flex gap-4 flex-wrap justify-center max-w-[1200px]">
          {normalizedTags.map((tag, index) =>
            index === 0 ? (
              <div
                key={index}
                className="w-[40px] h-[40px] bg-black rounded-[5px] flex items-center justify-center"
              >
                <img
                  src="/icons/tags.svg"
                  alt="Tags"
                  className="w-5 h-5"
                />
              </div>
            ) : (
              <Link
                key={index}
               to={`/tags/${encodeURIComponent(tag)}`}

                className="
                  h-[40px]
                  px-4
                  bg-[#DFDFDF]
                  rounded-[5px]
                  flex
                  items-center
                  text-[18px]
                  cursor-pointer
                  hover:bg-[#8967B3]
                  hover:text-white
                  transition
                "
              >
                {tag}
              </Link>
            )
          )}
        </div>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default JobDetails;
