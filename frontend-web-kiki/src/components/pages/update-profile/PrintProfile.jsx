// PrintProfile.jsx
import { useUser } from "../../../context/UserContext";

const levelMap = {
  1: "Junior",
  2: "Middle",
  3: "Senior",
  4: "Lead",
  5: "Expert",
};

const PrintProfile = () => {
  const { user } = useUser();

  if (!user) {
    return <div>No profile data</div>;
  }

  return (
    <div className="relative w-[1600px] min-h-[2000px] bg-white">
      {/* ================= AVATAR ================= */}
      {user.avatar && (
        <img
          src={user.avatar}
          alt="Avatar"
          className="absolute top-[100px] left-[170px] w-[180px] h-[180px] rounded-full object-cover"
        />
      )}

      {/* ================= NAME ================= */}
      <h1 className="absolute top-[300px] left-[190px] text-[62px] font-semibold text-black">
        {user.fullName}
      </h1>

      {/* ================= TITLE ================= */}
      <p className="absolute top-[420px] left-[190px] text-[42px] text-black">
        {user.title}
      </p>

      {/* ================= CONTACT INFO ================= */}
      <div className="absolute top-[540px] left-[190px] text-[38px] space-y-5">
        {user.links?.map((link, idx) => (
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

        {user.email && (
          <p>
            Email:{" "}
            <a
              href={`mailto:${user.email}`}
              className="text-blue-600 underline"
            >
              {user.email}
            </a>
          </p>
        )}
      </div>

      {/* ================= SKILLS TABLE ================= */}
      <div className="absolute top-[1000px] left-[190px] w-[1000px] bg-[#F3F3F3] rounded-[16px] overflow-hidden">
        {/* Header */}
        <div className="h-[80px] w-[1000px] bg-[#C9C8C8] flex justify-between items-center px-[80px] text-[42px] font-semibold">
          <span>Skill</span>
          <span>Proficiency</span>
        </div>

        {/* Rows */}
        {user.skills?.map((skill, idx) => (
          <div
            key={idx}
            className="h-[100px] flex justify-between items-center px-[70px] text-[42px] border-t border-gray-300"
          >
            <span>{skill.name}</span>
            <span>{levelMap[skill.level]}</span>
          </div>
        ))}
      </div>

      {/* ================= BIO ================= */}

      {/* HEADER */}
      <h2 className="absolute top-[1600px] left-[190px] text-[45px] font-semibold">
        Introduce yourself
      </h2>

      {/* BIO TEXT */}
      <p className="absolute top-[1700px] left-[190px] w-[1800px] text-[42px] leading-[78px]">
        {user.about || "No bio provided."}
      </p>
      {/* ================= BLACK FOOTER BAR ONLY ================= */}
      <div className="absolute top-[2200px] left-0 w-full bg-black px-[150px] pb-[4px]">
        <div className="h-[190px] flex items-center">
          {/* LEFT GROUP: LOGO + TAGLINE + COPYRIGHT */}
          <div className="flex items-center gap-12">
            {/* LOGO + COPYRIGHT */}
            <div className="flex flex-col items-start">
              <img
                src="/icons/footer-logo.svg"
                alt="Logo"
                className="h-[70px]"
              />

              {/* COPYRIGHT BELOW LOGO */}
              <p className="mt-14 text-[16px] text-white leading-[26px]">
                © 2026 Your Company. All rights reserved.
              </p>
            </div>

            {/* TAGLINE — pushed slightly right */}
            <p className="ml-6 text-[28px] text-white whitespace-nowrap">
              Sheqlee — your #1 place to find skilled professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintProfile;
