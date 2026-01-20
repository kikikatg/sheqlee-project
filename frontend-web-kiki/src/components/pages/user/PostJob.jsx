import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import { useEffect } from "react";

import {
  JOB_CATEGORIES,
  JOB_TYPES,
  JOB_LEVELS,
  SALARY_CURRENCIES,
  SALARY_TYPES,
  SKILLS,
} from "../../../data/jobConstants";

import RichTextToolbar from "../../shared/RichTextToolbar";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();
  const [shortDescription, setShortDescription] = useState("");

  const [agree, setAgree] = useState(false);

  /* skills dropdown (ONLY addition) */
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  // const [experience, setExperience] = useState("");
  // const [skillsDesc, setSkillsDesc] = useState("");
  const [primaryPurpose, setPrimaryPurpose] = useState("");
  const [currency, setCurrency] = useState("$");
  const [paymentUnit, setPaymentUnit] = useState("/hour");
  const handleSaveDraft = () => {
    if (!jobTitle || !jobType || !jobLevel || !shortDescription) {
      alert("Please fill all required fields before saving draft.");
      return;
    }

    const draft = {
      jobTitle,
      jobType,
      jobLevel,
      salary,
      currency,
      paymentUnit,
      shortDescription,
      description,
      requirements,
      skills: selectedSkills,
      primaryPurpose,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem("jobDraft", JSON.stringify(draft));
    alert("Draft saved successfully!");
  };
  useEffect(() => {
    const savedDraft = localStorage.getItem("jobDraft");
    if (savedDraft) {
      const d = JSON.parse(savedDraft);
      setJobTitle(d.jobTitle || "");
      setJobType(d.jobType || "");
      setJobLevel(d.jobLevel || "");
      setSalary(d.salary || "");
      setCurrency(d.currency || "$");
      setPaymentUnit(d.paymentUnit || "/hour");
      setShortDescription(d.shortDescription || "");
      setDescription(d.description || "");
      setRequirements(d.requirements || "");
      setSelectedSkills(d.skills || []);
      setPrimaryPurpose(d.primaryPurpose || "");
    }
  }, []);

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
          Add a vacancy <span className="font-normal">[1/2]</span>
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
          Next and final step is preview and confirmation.
        </p>
      </section>

      {/* FORM */}
      <section className="mt-12 px-[101px] max-w-[1200px] mx-auto space-y-16">
        {/* Job title */}
        <div className="space-y-3">
          <label className="text-[24px] font-medium">
            Job title <span className="text-red-500">*</span>
          </label>
          <input
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full h-[80px] bg-[#DFDFDF] rounded-[15px] px-6 text-[22px]"
          />
        </div>

        {/* Category & Job Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: "Category", data: JOB_CATEGORIES },
            { label: "Job type", data: JOB_TYPES },
          ].map(({ label, data }) => (
            <div key={label} className="space-y-3">
              <label className="text-[24px] font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full text-[24px] h-[80px] bg-[#DFDFDF]  cursor-pointer rounded-[15px] px-6 pr-14 appearance-none"
                >
                  <option disabled selected>
                    Select {label.toLowerCase()}
                  </option>
                  {data.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
                <img
                  src="/icons/arrow-down.svg"
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill level & Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skill level */}
          <div className="space-y-3">
            <label className="text-[24px] font-medium">
              Skill level <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                onChange={(e) => setJobLevel(e.target.value)}
                className="w-full  cursor-pointer text-[24px] h-[80px] bg-[#DFDFDF] rounded-[15px] px-6 pr-14 appearance-none"
              >
                <option disabled selected>
                  Select skill level
                </option>
                {JOB_LEVELS.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
              <img
                src="/icons/arrow-down.svg"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
              />
            </div>
          </div>

          {/* Salary */}
          <div className="space-y-3">
            <label className="text-[24px] font-medium">Salary</label>
            <div className="flex">
              {/* Currency */}
              <div className="flex w-full">
                {/* LEFT BLACK BAR — CURRENCY */}
                {/* LEFT BLACK BAR — CURRENCY */}
                <div className="w-[110px] bg-black rounded-l-[15px] relative flex items-center">
                  {/* Visible selected value */}
                  <span className="absolute left-6 text-white text-[24px] pointer-events-none">
                    {currency}
                  </span>

                  {/* Native select (invisible text, still clickable) */}
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full h-[80px] bg-transparent text-transparent pl-6 pr-12 appearance-none cursor-pointer"
                  >
                    {SALARY_CURRENCIES.map((c) => (
                      <option key={c} className="text-black bg-white">
                        {c}
                      </option>
                    ))}
                  </select>

                  {/* dropdown icon */}
                  <img
                    src="/icons/arrow-down-ws.svg"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-[14px]"
                  />
                </div>

                {/* CENTER INPUT — PRICE */}
                <input
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter price"
                  className="w-full h-[80px] bg-[#DFDFDF] text-[24px] px-6 outline-none"
                />

                {/* RIGHT BLACK BAR — PAYMENT UNIT */}
                {/* RIGHT BLACK BAR — PAYMENT UNIT */}
                <div className="w-[200px] bg-black rounded-r-[15px] relative flex items-center">
                  {/* Visible selected value */}
                  <span className="absolute left-6 text-white text-[20px] pointer-events-none">
                    {paymentUnit}
                  </span>

                  {/* Native select */}
                  <select
                    value={paymentUnit}
                    onChange={(e) => setPaymentUnit(e.target.value)}
                    className="w-full h-[80px] bg-transparent text-transparent pl-8 pr-16   appearance-none cursor-pointer"
                  >
                    {SALARY_TYPES.map((t) => (
                      <option key={t} className="text-black bg-white">
                        {t}
                      </option>
                    ))}
                  </select>

                  {/* dropdown icon */}
                  <img
                    src="/icons/arrow-down-wb.svg"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Short description */}
        <div className="space-y-2">
          <label className="text-[24px] font-medium">
            Short description<span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              maxLength={128}
              placeholder="Short job description"
              className="w-full h-[200px] p-6 bg-[#DFDFDF] text-[22px] rounded-[15px]"
            />

            {/* 0/128 counter — INSIDE container */}
            <span className="absolute bottom-4 right-6 text-[16px] text-gray-600">
              {shortDescription.length}/128
            </span>
          </div>

          {/* Text BELOW textarea */}
          <p className="text-[18px] text-gray-700">Who are you looking for?</p>
        </div>

        {/* Rich text sections (UNTOUCHED) */}
        {/* Requirements */}
        {/* Requirements */}
        <div className="space-y-3">
          <label className="text-[24px] font-medium">
            Requirements <span className="text-red-500">*</span>
          </label>

          <div className="rounded-[15px] overflow-hidden">
            <RichTextToolbar />
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="List the job requirements here"
              className="w-full h-[200px] p-6 bg-[#DFDFDF] text-[22px] rounded-b-[15px]"
            />
          </div>
        </div>

        {/* Job description */}
        <div className="space-y-3">
          <label className="text-[24px] font-medium">Description</label>

          <div className="rounded-[15px] overflow-hidden">
            <RichTextToolbar />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the job role and responsibilities"
              className="w-full h-[200px] p-6 bg-[#DFDFDF] text-[22px] rounded-b-[15px]"
            />
          </div>
        </div>

        {/* How to apply */}
        <div className="space-y-3">
          <label className="text-[24px] font-medium">How to apply</label>

          <div className="rounded-[15px] overflow-hidden">
            <RichTextToolbar />
            <textarea
              value={primaryPurpose}
              onChange={(e) => setPrimaryPurpose(e.target.value)}
              placeholder="How can professionals apply..."
              className="w-full h-[200px] p-6 bg-[#DFDFDF] text-[22px] rounded-b-[15px]"
            />
          </div>
        </div>

        {/* Skills (FUNCTIONAL, SAME POSITION) */}
        {/* Skills */}
        {/* Skills */}
        <div className="space-y-3 relative">
          <label className="text-[24px] font-medium">
            Skills{" "}
            <span className="text-[18px] text-gray-500">
              (technology names)
            </span>
            <span className="text-red-500">*</span>
          </label>

          {/* Input / Tag container */}
          <div
            onClick={() => setShowSkills(!showSkills)}
            className="relative min-h-[80px] bg-[#DFDFDF] rounded-[15px] px-6 pr-16 py-3 flex flex-wrap gap-3 items-center cursor-pointer"
          >
            {/* Placeholder */}
            {selectedSkills.length === 0 && (
              <span className="text-gray-500 text-[22px]">
                Add required skills (e.g. React, AWS)
              </span>
            )}

            {/* Selected skill tags */}
            {selectedSkills.map((skill) => (
              <span
                key={skill}
                className="bg-black text-white px-4 py-2 rounded-full text-[18px] flex items-center gap-2"
              >
                {skill}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSkills(
                      selectedSkills.filter((s) => s !== skill)
                    );
                  }}
                  className="text-white text-[16px]"
                >
                  ✕
                </button>
              </span>
            ))}

            {/* Arrow icon (RIGHT SIDE) */}
            <img
              src="/icons/arrow-down.svg"
              className={`absolute right-6 top-1/2 -translate-y-1/2 w-[18px] transition-transform ${
                showSkills ? "rotate-180" : ""
              }`}
              alt="dropdown"
            />
          </div>

          {/* Dropdown */}
          {showSkills && (
            <div className="absolute w-full bg-white rounded-[15px] shadow mt-2 z-20 max-h-[260px] overflow-y-auto">
              {SKILLS.filter((s) => !selectedSkills.includes(s)).map((s) => (
                <div
                  key={s}
                  onClick={() => {
                    setSelectedSkills([...selectedSkills, s]);
                  }}
                  className="px-6 py-4 hover:bg-[#F7F7F7] cursor-pointer text-[22px]"
                >
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Apply link */}
        <div className="space-y-3">
          <label className="text-[24px] font-medium">
            Apply link <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="URL or email"
            className="w-full h-[80px] bg-[#DFDFDF] rounded-[15px] px-6 text-[22px]"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-4 mt-10">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="w-[37px] h-[37px] bg-[#DFDFDF] rounded-[5px]"
          />
          <p className="text-[20px]">
            I want my company name excluded from this vacancy.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="
    flex
    flex-col sm:flex-row
    justify-center
    gap-6 sm:gap-10
    mt-10 sm:mt-14 lg:mt-16
    px-4
  "
        >
          <button
            onClick={handleSaveDraft}
            className="
      w-full sm:w-[269px]
      h-[65px] sm:h-[85px]
      bg-white
      border-[4px] sm:border-[5px]
      border-[#8967B3]
      rounded-[15px]
      text-[18px] sm:text-[22px] lg:text-[28px]
    "
          >
            Save draft
          </button>

          <button
            onClick={() =>
              navigate("/post-job/review", {
                state: {
                  title: jobTitle,
                  type: jobType,
                  level: jobLevel,
                  rate: salary,
                  currency,
                  paymentUnit,
                  shortDescription,
                  details: {
                    description,
                    requirements: requirements.split("\n"),
                    skills: selectedSkills,
                    primaryPurpose,
                  },
                },
              })
            }
            className="
      w-full sm:w-[462px]
      h-[65px] sm:h-[85px]
      bg-[#8967B3]
      rounded-[15px]
      text-[18px] sm:text-[24px] lg:text-[30px]
      font-medium
      text-white
      flex
      items-center
      justify-center
      gap-2
      text-center
      flex-wrap
    "
          >
            Next
            <span className="text-[14px] sm:text-[18px] lg:text-[25px] text-gray-200">
              [preview & confirm]
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex justify-center mt-26">
          <div className="w-[780px] h-[5px] bg-[#DFDFDF] rounded-[15px]" />
        </div>

        {/* Required note */}
        <p className="text-center 0 text-[22px] sm:text-[18px] md:text-[18px]">
          <span className="text-red-500">*</span> fields are required
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default PostJob;
