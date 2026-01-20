import { useLocation } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
const levelMap = {
  1: "Junior",
  2: "Middle",
  3: "Senior",
  4: "Lead",
  5: "Expert",
};

const FreelancerPrintProfile = () => {
  const { state } = useLocation();
  const { user } = useUser();

  const profile = state?.profile || user?.userProfile;
  if (!profile) {
    return <div className="p-6 text-xl text-gray-600">No profile data</div>;
  }

  return (
    <div className="relative w-full min-h-screen bg-white px-4 sm:px-8 md:px-16 mt-24 lg:px-24 xl:px-32">
      {/* ================= AVATAR ================= */}
      {profile.avatar && (
        <div className="flex justify-center lg:justify-start ">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-40 h-40 md:w-44 md:h-44 lg:w-44 lg:h-44 rounded-full object-cover"
          />
        </div>
      )}

      {/* ================= NAME ================= */}
      <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl font-semibold text-black text-center lg:text-left">
        {profile.fullName}
      </h1>

      {/* ================= TITLE ================= */}
      <p className="mt-10 text-2xl sm:text-3xl md:text-4xl text-black text-center lg:text-left">
        {profile.title}
      </p>

      {/* ================= CONTACT INFO ================= */}
      <div className="mt-10 space-y-8 text-lg sm:text-xl md:text-2xl lg:text-[38px] text-center lg:text-left">
        {profile.links?.map((link, idx) => (
          <p key={idx}>
            {link.name}:{" "}
            <a
              href={link.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.url}
            </a>
          </p>
        ))}

        {profile.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-600 underline"
            >
              {profile.email}
            </a>
          </p>
        )}
      </div>

      {/* ================= SKILLS TABLE ================= */}
      <div className="mt-20 w-full max-w-4xl mx-0 bg-[#F3F3F3] rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="h-20 w-full bg-[#C9C8C8] flex justify-between items-center px-6 sm:px-8 md:px-16 text-3xl sm:text-4xl md:text-[42px] font-semibold">
          <span>Skill</span>
          <span>Proficiency</span>
        </div>

        {/* Rows */}
        {profile.skills?.map((skill, idx) => (
          <div
            key={idx}
            className="h-24 flex justify-between items-center px-6 sm:px-8 md:px-16 text-3xl sm:text-4xl md:text-[42px] border-t border-gray-300"
          >
            <span>{skill.name}</span>
            <span>{levelMap[skill.level]}</span>
          </div>
        ))}
      </div>

      {/* ================= BIO ================= */}
      <h2 className="mt-24 text-3xl sm:text-4xl md:text-[45px] font-semibold text-black">
        Self Introduction
      </h2>

      <p className="mt-8 text-xl sm:text-2xl md:text-[42px] leading-[40px] sm:leading-relaxed md:leading-[55px] max-w-full">
        {profile.about || "No bio provided."}
      </p>

      {/* ================= BLACK FOOTER BAR ONLY ================= */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-black py-10 px-4 sm:px-8 md:px-16 mt-60">
        <div className="max-w-[1600px] mx-16 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/icons/footer-logo.svg"
              alt="Logo"
              className="h-16 md:h-20"
            />
            <p className="text-[#FFFFFF] text-sm md:text-base leading-6">
              © 2026 Sheqlee Co. Ltd. All rights reserved.
            </p>
          </div>

          <p className="text-white text-lg sm:text-xl md:text-2xl lg:ml-80 whitespace-normal  ">
            Sheqlee — your #1 place to find skilled professionals
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerPrintProfile;
