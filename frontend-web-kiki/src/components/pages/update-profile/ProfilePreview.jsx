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

const ProfilePreview = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  if (!user) {
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
      <section className="mt-24 max-w-[1282px] mx-auto flex items-start gap-[37px]">
        {/* NAME */}
        <div className="w-[525px]">
          <label className="text-[24px] font-medium">Full name</label>
          <div className="mt-4 w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[22px]">
            {user.fullName}
          </div>
        </div>

        {/* TITLE */}
        <div className="w-[525px]">
          <label className="text-[24px] font-medium">Title</label>
          <div className="mt-4 w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[22px]">
            {user.title}
          </div>
        </div>

        {/* AVATAR */}
        <div className="flex flex-col items-center">
          <div className="w-[141px] h-[141px] rounded-full bg-[#DFDFDF] overflow-hidden">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <img src="/icons/set.svg" className="w-12 h-12 mx-auto mt-12" />
            )}
          </div>
        </div>
      </section>

      {/* ================= INTRODUCE YOURSELF ================= */}
      <section className="mt-24">
        <div className="max-w-[1282px] mx-auto">
          <label className="text-[24px] font-medium">Bio</label>

          <div className="mt-4 w-[1282px] min-h-[317px] bg-[#DFDFDF] rounded-[15px] p-6 text-[22px] leading-[32px]">
            {user.about || "No description provided."}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="mt-24 max-w-[1282px] mx-auto">
        <label className="text-[24px] font-medium mb-4 block">Skillsets</label>

        <div className="w-[1282px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
          {/* HEADER */}
          <div className="h-[77px] bg-[#444444] grid grid-cols-[2fr_3fr] items-center px-10 text-white text-[22px] font-medium">
            <span>Skill</span>
            <span>Level</span>
          </div>

          {user.skills?.map((skill, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[2fr_3fr] items-center px-10 h-[74px]
              ${
                idx !== user.skills.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <span className="text-[22px]">{skill.name}</span>

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <LevelCircle key={n} value={n} active={n <= skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROFILES ================= */}
      <section className="mt-24 max-w-[1282px] mx-auto">
        <label className="text-[24px] font-medium mb-4 block">Profiles</label>

        <div className="w-[1282px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
          <div className="h-[77px] bg-[#444444] grid grid-cols-[2fr_3fr] items-center px-10 text-white text-[22px] font-medium">
            <span>Profile name</span>
            <span>URL</span>
          </div>

          {user.links?.map((link, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[2fr_3fr] items-center px-10 h-[74px]
              ${
                idx !== user.links.length - 1 ? "border-b border-gray-300" : ""
              }`}
            >
              <span className="text-[22px]">{link.name}</span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] text-blue-600 underline hover:text-blue-800"
              >
                {link.url}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CV + EMAIL ================= */}
      <section className="mt-24 max-w-[1282px] mx-auto flex gap-10">
        {/* ================= CV ================= */}
        {/* ================= CV ================= */}
        <div className="flex-1">
          <label className="text-[24px] font-medium">Your CV</label>

          <div className="mt-6 w-full h-[80px] rounded-[15px] overflow-hidden flex">
            {/* LEFT: CV PATH */}
            <div className="flex-1 bg-[#DFDFDF] flex items-center px-6 text-[20px]">
              {user.cv ? user.cv.name : "No CV uploaded"}
            </div>

            {/* RIGHT: DOWNLOAD BUTTON */}
            <button
              disabled={!user.cv}
              onClick={() => downloadCV(user.cv)}
              className="w-[220px] h-full bg-[#8967B3] text-white text-[22px] font-medium
                 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Download
            </button>
          </div>
        </div>

        {/* ================= EMAIL ================= */}
        <div className="flex-1">
          <label className="text-[24px] font-medium">Email</label>

          <div className="mt-6 w-full h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center px-6 text-[20px]">
            {user.email}
          </div>
        </div>
      </section>

      {/* ================= PRINT ================= */}
      <section className="mt-24 mb-32">
        <div className="w-[1282px] mx-auto flex justify-end">
          <button
            onClick={() => navigate("/print-profile")}
            className="w-[220px] h-[60px] bg-[#8967B3] text-white rounded-[15px] text-[20px]"
          >
            Print profile
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProfilePreview;
