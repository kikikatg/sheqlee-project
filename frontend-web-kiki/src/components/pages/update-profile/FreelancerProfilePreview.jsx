import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import { useUser } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const LevelCircle = ({ active, value }) => (
  <div
    className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-[14px]
      ${active ? "bg-black text-white" : "bg-[#BDBDBD] text-white"}`}
  >
    {value}
  </div>
);

const FreelancerProfilePreview = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const profile = user?.userProfile;
  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">No profile data found.</p>
      </main>
    );
  }

  const downloadCV = (cv) => {
    if (!cv?.url) return;

    const link = document.createElement("a");
    link.href = cv.url;
    link.download = cv.name || "cv.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* ================= BREADCRUMB ================= */}
      <SubNavbar crumbs={[{ label: "Profile", active: true }]} />

      {/* ================= HEADER ================= */}
      <section className="flex flex-col items-center mt-10 text-center">
        <img
          src="/icons/edit_profile.svg"
          alt="profile"
          className="w-[90px] h-[90px]"
        />

        <h1 className="mt-8 text-[60px] font-semibold">Freelancer Profile</h1>

        <p className="mt-6 text-[30px] leading-[40px] max-w-[700px]">
          This is how companies will see your profile.
        </p>
      </section>

      {/* ================= BASIC INFO ================= */}
      <section
        className="
    mt-24
    max-w-[1320px]
    mx-auto
    px-4
    md:px-6
    lg:px-14
    xl:px-2
    flex
    flex-col
    lg:flex-row
    items-center
    lg:items-start
    gap-10
  "
      >
        {/* NAME */}
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center flex-1 min-w-0">
          <div className="flex-1 min-w-[220px] max-w-[525px]">
            <label className="text-[24px] font-medium">Full name</label>

            <div className="mt-4 w-full h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[22px]">
              {profile.fullName}
            </div>
          </div>

          {/* TITLE */}
          <div className="flex-1 min-w-[220px] max-w-[525px]">
            <label className="text-[24px] font-medium">Title</label>

            <div className="mt-4 w-full h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[22px]">
              {profile.title}
            </div>
          </div>
        </div>

        {/* AVATAR */}
        <div className="flex flex-col items-center mt-6 xl:mt-0 shrink min-w-[110px]">
          <div className="w-[141px] h-[141px] max-w-[141px] aspect-square rounded-full bg-[#DFDFDF] overflow-hidden">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/icons/set.svg"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* ================= INTRODUCE YOURSELF ================= */}
      <section className="mt-24 px-4 md:px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto">
          <label className="text-[24px] font-medium">Bio</label>

          <div className="mt-4 w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[317px] bg-[#DFDFDF] rounded-[15px] p-6 text-[22px] leading-[32px]">
            {profile.about || "No description provided."}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="mt-24 overflow-x-auto px-4 md:px-6 lg:px-12">
        <div className="w-full max-w-[1320px] mx-auto min-w-0">
          <label className="text-[24px] font-medium mb-4 block">
            Skillsets
          </label>
          <div className="w-full bg-[#DFDFDF] rounded-[15px] overflow-hidden">
            {/* HEADER */}
            <div
              className="
    h-[77px]
    grid
    grid-cols-[2fr_3fr_1fr]
    items-center
    px-4
    sm:px-6
    lg:px-10
    text-white
    text-[18px]
    sm:text-[20px]
    lg:text-[22px]
    font-medium
    bg-[#444444]
    min-w-0
  "
            >
              <span>Skill</span>
              <span>Level</span>
              <span className="text-right">Action</span>
            </div>

            {profile.skills?.map((skill, idx) => (
              <div
                key={idx}
                className={`
      grid
      grid-cols-[2fr_3fr_1fr]
      items-center
      px-4
      sm:px-6
      lg:px-10
      h-[74px]
      text-[18px]
      sm:text-[20px]
      lg:text-[22px]
      min-w-0
      ${idx !== profile.skills.length - 1 ? "border-b border-gray-300" : ""}
    `}
              >
                <span className="truncate">{skill.name}</span>

                <div className="flex gap-2 sm:gap-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <LevelCircle key={n} value={n} active={n <= skill.level} />
                  ))}
                </div>

                <div className="flex justify-end">
                  <div className="w-[53px] sm:w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center cursor-pointer">
                    <img src="/icons/delete.svg" className="w-4 sm:w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROFILES ================= */}
      <section className="mt-24 overflow-x-auto px-4 md:px-6 lg:px-12">
        <div className="w-full max-w-[1320px] mx-auto min-w-0">
          <label className="text-[24px] font-medium mb-4 block">Profiles</label>

          <div className="w-full bg-[#DFDFDF] rounded-[15px] overflow-x-auto">
            {/* HEADER */}
            <div
              className="
    h-[77px]
    grid
    grid-cols-[2fr_3fr_1fr]
    items-center
    px-4
    sm:px-6
    lg:px-10
    text-white
    text-[18px]
    sm:text-[20px]
    lg:text-[22px]
    font-medium
    bg-[#444444]
    min-w-0
  "
            >
              <span>Profile name</span>
              <span>URL</span>
              <span className="text-right">Action</span>
            </div>

            {profile.links?.map((link, idx) => (
              <div
                key={idx}
                className={`
      grid
      grid-cols-[2fr_3fr_1fr]
      items-center
      px-4
      sm:px-6
      lg:px-10
      h-[74px]
      text-[18px]
      sm:text-[20px]
      lg:text-[22px]
      min-w-0
      ${idx !== profile.links.length - 1 ? "border-b border-gray-300" : ""}
    `}
              >
                <span className="truncate">{link.name}</span>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] sm:text-[18px] text-blue-600 underline break-all"
                >
                  {link.url}
                </a>

                <div className="flex justify-end">
                  <div className="w-[53px] sm:w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center cursor-pointer">
                    <img src="/icons/delete.svg" className="w-4 sm:w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CV + EMAIL ================= */}
      <section className="mt-24 max-w-[1420px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 md:px-6 lg:px-12">
        {/* CV */}
        <div className="flex-1">
          <label className="text-[24px] font-medium">Your CV</label>

          <div className="mt-6 w-full h-[80px] rounded-[15px] overflow-hidden flex">
            <div className="flex-1 bg-[#DFDFDF] flex items-center px-6 text-[20px]">
              {profile.cv ? profile.cv.name : "No CV uploaded"}
            </div>

            <button
              disabled={!profile.cv}
              onClick={() => downloadCV(profile.cv)}
              className="w-[220px] h-full bg-[#8967B3] text-white text-[22px] font-medium
                 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Download
            </button>
          </div>
        </div>

        {/* EMAIL */}
        <div className="flex-1 ">
          <label className="text-[24px] font-medium">Email</label>

          <div className="mt-6 w-full h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[20px]">
            {profile.email}
          </div>
        </div>
      </section>

      {/* ================= PRINT ================= */}
      <section className="mt-24 mb-32 px-4 md:px-6 lg:px-12">
        <div className="max-w-[1320px] mx-auto flex justify-end">
          <button
            onClick={() =>
              navigate("/freelancer/print-profile", {
                state: { profile: profile },
              })
            }
            className="w-[220px] h-[60px] bg-[#8967B3] text-white rounded-[15px] text-[20px]"
          >
            Print profile
          </button>
        </div>
      </section>
    </main>
  );
};

export default FreelancerProfilePreview;
