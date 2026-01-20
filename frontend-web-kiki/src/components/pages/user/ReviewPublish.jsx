import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import { mockCategories } from "../../../data/mockCategories";
import { META_ICONS } from "../../../constants/JobIcons";

const ReviewPublish = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const companyName = state?.company || "Your Company";
  const jobTags = state?.details?.skills || [];

  const handlePublish = () => {
    const existingJobs =
      JSON.parse(localStorage.getItem("publishedJobs")) || [];

    const newJob = {
      id: Date.now(), // TEMP ID (API will replace)
      title: state.title,
      type: state.type,
      level: state.level,
      status: "Published",
      fullData: state, // keep full job for future pages
      publishedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "publishedJobs",
      JSON.stringify([...existingJobs, newJob])
    );

    navigate("/dashboard/detail");
  };

  const getCategoryIconByTitle = (title) => {
    if (!title) return "/icons/job.svg";

    const normalizedTitle = title.toLowerCase();

    // 1️⃣ Exact / partial name match
    const directMatch = mockCategories.find((cat) =>
      normalizedTitle.includes(cat.name.toLowerCase())
    );

    if (directMatch) return directMatch.icon;

    // 2️⃣ Keyword-based matching (SMART FALLBACK)
    if (
      normalizedTitle.includes("frontend") ||
      normalizedTitle.includes("react") ||
      normalizedTitle.includes("vue") ||
      normalizedTitle.includes("html")
    ) {
      return mockCategories.find((c) => c.slug === "web-frontend")?.icon;
    }

    if (
      normalizedTitle.includes("backend") ||
      normalizedTitle.includes("node") ||
      normalizedTitle.includes("api") ||
      normalizedTitle.includes("database")
    ) {
      return mockCategories.find((c) => c.slug === "backend-database")?.icon;
    }

    if (
      normalizedTitle.includes("design") ||
      normalizedTitle.includes("ui") ||
      normalizedTitle.includes("ux")
    ) {
      return mockCategories.find((c) => c.slug === "ui-ux-product-design")
        ?.icon;
    }

    if (
      normalizedTitle.includes("machine") ||
      normalizedTitle.includes("ml") ||
      normalizedTitle.includes("ai")
    ) {
      return mockCategories.find((c) => c.slug === "machine-learning")?.icon;
    }

    // 3️⃣ Final fallback
    return "/icons/job.svg";
  };

  const jobIcon = getCategoryIconByTitle(state?.title);

  const details = state?.details || {};
  const requirementsList = details.requirements || [];

  const qualifications = requirementsList.filter((item) =>
    /degree|bachelor|master|phd|diploma|certification/i.test(item)
  );

  const experience = requirementsList.filter((item) =>
    /experience|years?|yr|yrs?/i.test(item)
  );

  const skillsAndKnowledge = requirementsList.filter((item) =>
    /skill|knowledge|literate|communication|team|technology|software|tools/i.test(
      item
    )
  );

  const renderText = (content) => {
    if (!content) return null;

    if (typeof content === "string") {
      return (
        <p className="text-[18px] leading-8 whitespace-pre-line">{content}</p>
      );
    }

    if (Array.isArray(content)) {
      return content.map((item, i) => (
        <p key={i} className="text-[18px] leading-8 mb-3">
          {item}
        </p>
      ));
    }

    return null;
  };

  const renderList = (items) =>
    Array.isArray(items) &&
    items.map((item, i) => (
      <li key={i} className="text-[18px] flex gap-3">
        <span>-</span>
        <span>{item}</span>
      </li>
    ));

  const descriptionLines = (details.description || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  // const primaryPurposeItem = details.primaryPurpose;

  /* ------------------------------------ */

  return (
    <main className="bg-white min-h-screen ">
      <SubNavbar crumbs={[{ label: "Vacancy", active: true }]} />

      {/* INFO CARD */}
      <div className="flex justify-center mt-10 sm:mt-16 lg:mt-20 px-4">
        <div
          className="
      w-full max-w-[970px]
      min-h-[120px]
      bg-[#F7F7F7]
      rounded-[15px]
      flex
      flex-col sm:flex-row
      overflow-hidden
    "
        >
          {/* Left Icon */}
          <div
            className="
        w-full sm:w-[120px]
        h-[80px] sm:h-auto
        bg-black
        flex
        items-center
        justify-center
      "
          >
            <img
              src="/icons/template.svg"
              className="w-[36px] sm:w-[47px]"
              alt="template"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-4 sm:px-8 py-4 sm:py-0">
            <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-medium leading-snug">
              To speed up the process of posting a job, try using{" "}
              <span
                className="text-[#8967B3] underline cursor-pointer hover:opacity-80"
                onClick={() => navigate("/job-templates")}
              >
                job templates
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <section className="text-center mt-12 sm:mt-16 lg:mt-24 px-4">
        <h1
          className="
      text-[28px]
      sm:text-[40px]
      lg:text-[60px]
      font-semibold
      leading-tight
    "
        >
          Review & publish <span className="font-normal">[2/2]</span>
        </h1>

        <p
          className="
      mt-4 sm:mt-5 lg:mt-6
      text-[16px]
      sm:text-[22px]
      lg:text-[35px]
      leading-snug
    "
        >
          Review job details before publishing
        </p>
      </section>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
        {/* EDIT JOB */}
        <button
          onClick={() => navigate("/user/post-job", { state })}
          className="
      w-[160px] sm:w-[100px]
      h-[60px] sm:h-[80px]
      border-[4px] sm:border-[5px]
      border-[#8967B3]
      rounded-[12px] sm:rounded-[15px]
      text-[#8967B3]
      text-[16px] sm:text-[20px]
      font-medium
      flex
      items-center
      justify-center
      hover:bg-[#8967B3]/10
      transition
    "
        >
          Edit
        </button>

        {/* PUBLISH JOB */}
        <button
          onClick={handlePublish}
          className="
      w-[240px] sm:w-[220px]
      h-[60px] sm:h-[80px]
      bg-[#8967B3]
      rounded-[12px] sm:rounded-[15px]
      text-white
      text-[16px] sm:text-[20px]
      font-medium
      flex
      items-center
      justify-center
      hover:opacity-90
      transition
    "
        >
          Publish job
        </button>
      </div>

      {/* DIVIDER */}
      <div className="flex items-center justify-center gap-8 mt-16">
        <div className="w-[560px] h-[5px] bg-[#DFDFDF]" />
        <span className="text-[20px] font-medium">VACANCY PREVIEW</span>
        <div className="w-[560px] h-[5px] bg-[#DFDFDF]" />
      </div>

      {/* JOB TITLE */}
      <div className="flex justify-center items-center gap-4 mt-14">
        <img src={jobIcon} className="w-[36px]" />
        <h2 className="text-[42px] font-medium">{state?.title}</h2>
      </div>

      {/* STAT CARDS */}
      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        {companyName && (
          <div className="flex items-center gap-3 px-5 h-[45px] bg-[#DFDFDF] rounded-[8px]">
            <img src={META_ICONS.company} className="w-[18px]" />
            <span className="text-[16px]">{companyName}</span>
          </div>
        )}

        {state?.type && (
          <div className="flex items-center gap-3 px-5 h-[45px] bg-[#DFDFDF] rounded-[8px]">
            <img src={META_ICONS.type} className="w-[18px]" />
            <span className="text-[16px]">{state.type}</span>
          </div>
        )}

        {state?.level && (
          <div className="flex items-center gap-3 px-5 h-[45px] bg-[#DFDFDF] rounded-[8px]">
            <img src={META_ICONS.level} className="w-[18px]" />
            <span className="text-[16px]">{state.level}</span>
          </div>
        )}

        {state?.rate && (
          <div className="flex items-center gap-3 px-5 h-[45px] bg-[#DFDFDF] rounded-[8px]">
            <img src={META_ICONS.price} className="w-[18px]" />
            <span className="text-[16px]">
              {state.rate} {state.currency}
              {state.paymentUnit}
            </span>
          </div>
        )}
      </div>

      {/* DESCRIPTION CONTAINER */}
      <div className="flex justify-center mt-10 sm:mt-16 lg:mt-20 px-4">
        <div
          className="
    w-full
    max-w-[1280px]
    bg-[#F7F7F7]
    rounded-[14px] sm:rounded-[20px]
    p-6 sm:p-10 lg:p-12
    space-y-8 sm:space-y-10
  "
        >
          {/* SHORT DESCRIPTION */}
          <section>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-6 sm:leading-7 text-[#333]">
              {state?.shortDescription}
            </p>
          </section>

          {/* QUALIFICATIONS */}
          <section>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold mb-3 sm:mb-4">
              Qualifications
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-[15px] sm:text-[16px] lg:text-[18px]">
              {renderList(qualifications)}
            </ul>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold mb-3 sm:mb-4">
              Experience
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-[15px] sm:text-[16px] lg:text-[18px]">
              {renderList(experience)}
            </ul>
          </section>

          {/* SKILLS */}
          <section>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold mb-3 sm:mb-4">
              Skills & Knowledge
            </h3>
            <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-[15px] sm:text-[16px] lg:text-[18px]">
              {renderList(skillsAndKnowledge)}
            </ul>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-semibold mb-3 sm:mb-4">
              Description
            </h3>

            {descriptionLines.map((line, i) => (
              <p
                key={i}
                className="text-[15px] sm:text-[16px] lg:text-[18px] leading-6 sm:leading-7 lg:leading-8 mb-2"
              >
                {line}
              </p>
            ))}

            {details.primaryPurpose && (
              <div className="mt-4 sm:mt-6">
                <h4 className="text-[15px] sm:text-[18px] lg:text-[20px] font-semibold mb-2">
                  PRIMARY PURPOSE:
                </h4>

                <p
                  className="
        block
        w-full
        text-[14px] sm:text-[16px] lg:text-[18px]
        leading-6 sm:leading-7
        whitespace-normal
        break-words
      "
                >
                  {details.primaryPurpose}
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* TAGS */}
      {jobTags.length > 0 && (
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          <div className="w-[40px] h-[40px] bg-black rounded-[5px] flex items-center justify-center">
            <img src="/icons/tags.svg" alt="Tags" className="w-5 h-5" />
          </div>

          {jobTags.map((tag, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/jobs", {
                  state: { tag, job: state },
                })
              }
              className="px-4 h-[40px] bg-[#DFDFDF] rounded-[5px] flex items-center cursor-pointer hover:bg-[#E0E0E0]"
            >
              {tag}
            </div>
          ))}
        </div>
      )}

      {/* BOTTOM DIVIDER */}
      <div className="flex justify-center mt-20">
        <div
          className="
      w-[1449px]
      h-[5px]
      bg-[#DFDFDF]
      rounded-[15px]
      opacity-100
    "
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-12 mb-16 px-4">
        {/* EDIT JOB */}
        <button
          onClick={() => navigate("/user/post-job", { state })}
          className="
      w-[160px] sm:w-[100px]
      h-[60px] sm:h-[80px]
      border-[4px] sm:border-[5px]
      border-[#8967B3]
      rounded-[12px] sm:rounded-[15px]
      text-[#8967B3]
      text-[16px] sm:text-[20px]
      font-medium
      flex
      items-center
      justify-center
      hover:bg-[#8967B3]/10
      transition
    "
        >
          Edit
        </button>

        {/* PUBLISH JOB */}
        <button
          onClick={handlePublish}
          className="
      w-[240px] sm:w-[220px]
      h-[60px] sm:h-[80px]
      bg-[#8967B3]
      rounded-[12px] sm:rounded-[15px]
      text-white
      text-[16px] sm:text-[20px]
      font-medium
      flex
      items-center
      justify-center
      hover:opacity-90
      transition
    "
        >
          Publish job
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default ReviewPublish;
