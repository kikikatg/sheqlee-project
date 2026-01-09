import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import RichTextToolbar from "../../shared/RichTextToolbar";
import AddSkillModal from "../../modals/AddSkillModal";
import AddLinkModal from "../../modals/AddLinkModal";
import { useUser } from "../../../context/UserContext";
const LevelCircle = ({ active, value }) => (
  <div
    className={`w-[28px] h-[28px] rounded-full flex items-center justify-center text-[14px]
      ${active ? "bg-black text-white" : "bg-[#BDBDBD] text-white"}`}
  >
    {value}
  </div>
);
const EditProfileDetails = () => {
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showAddLink, setShowAddLink] = useState(false);

  const { user, setUser } = useUser();
  const navigate = useNavigate();
  // FORM DATA (persisted)
  const [form, setForm] = useState({
    fullName: user.fullName || "",
    title: user.title || "",
  });

  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(user.skills || []);
  const [links, setLinks] = useState(user.links || []);
  const [cvFile, setCvFile] = useState(user.cv || null);

  // AVATAR
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar ?? "");

  const fullNameRef = useRef(null);
  const titleRef = useRef(null);

  // ------------------------------------
  // 🔄 AUTO-SYNC TO CONTEXT (STEP 3)
  // ------------------------------------
  useEffect(() => {
    setUser((prev) => ({
      ...prev,
      fullName: form.fullName,
      title: form.title,
      about,
      skills,
      links,
      cv: cvFile,
      // ❌ DO NOT sync avatar here
    }));
  }, [form, about, skills, links, cvFile, setUser]);

  // ------------------------------------
  // ACTIONS
  // ------------------------------------
  const addSkill = (skill) => {
    setSkills((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...skill,
      },
    ]);
  };

  const deleteSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const handleAddLink = (link) => {
    setLinks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...link,
      },
    ]);
  };

  const deleteLink = (id) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;

      setAvatar(file);
      setAvatarPreview(base64);

      // Save persistent avatar
      setUser((prev) => ({
        ...prev,
        avatar: base64,
      }));
    };

    reader.readAsDataURL(file);
  };
  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files allowed");
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    setCvFile({
      name: file.name,
      size: file.size,
      url: objectUrl, // ✅ THIS IS THE KEY
    });
  };

  const handleUpdateProfile = () => {
    navigate("/profile");
  };
  return (
    <main className="bg-white min-h-screen">
      {showAddSkill && (
        <AddSkillModal
          onClose={() => setShowAddSkill(false)}
          onAdd={addSkill}
        />
      )}

      {showAddLink && (
        <AddLinkModal
          onClose={() => setShowAddLink(false)}
          onAdd={handleAddLink}
        />
      )}

      <SubNavbar crumbs={[{ label: "Profile", active: true }]} />
      {/* HEADER */}
      <section className="flex flex-col items-center mt-10 text-center">
        <img
          src="/icons/edit_profile.svg"
          alt="edit profile"
          className="w-[90px] h-[90px]"
        />

        <h1 className="mt-8 text-[60px] font-semibold">Edit Profile</h1>

        <p className="mt-6 text-[30px] leading-[40px] max-w-[700px]">
          The more complete your profile, the easier for <br />
          companies to select you for jobs.
        </p>
      </section>
      {/* FULL NAME / TITLE / AVATAR */}
      <section className="mt-24 max-w-[1282px] mx-auto flex items-start gap-[37px]">
        {/* FULL NAME */}
        <div className="w-[525px]">
          <label className="text-[24px] font-medium">
            Full name <span className="text-red-500">*</span>
          </label>

          <div className="mt-4 relative w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px]">
            <input
              ref={fullNameRef}
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder="Muruts Yifter"
              className="w-full h-full bg-transparent px-6 text-[22px] outline-none"
            />

            <img
              src="/icons/edit-dark.svg"
              onClick={() => fullNameRef.current.focus()}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="w-[525px]">
          <label className="text-[24px] font-medium">
            Title <span className="text-red-500">*</span>
          </label>

          <div className="mt-4 relative w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px]">
            <input
              ref={titleRef}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Full-Stack Developer"
              className="w-full h-full bg-transparent px-6 text-[22px] outline-none"
            />

            <img
              src="/icons/edit-dark.svg"
              onClick={() => titleRef.current.focus()}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
            />
          </div>
        </div>

        {/* AVATAR */}
        <div className="flex flex-col items-center">
          <div className="w-[141px] h-[141px] rounded-full bg-[#DFDFDF] flex items-center justify-center overflow-hidden">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <img src="/icons/set.svg" className="w-12 h-12" />
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            hidden
            id="avatarUpload"
            onChange={handleAvatarChange}
          />

          <button
            onClick={() => document.getElementById("avatarUpload").click()}
            className="mt-0 w-[158px] h-[50px] bg-[#8967B3] text-white rounded-[10px]"
          >
            Upload
          </button>

          <p className="mt-2 text-[14px] text-gray-500">2MB Max | 1:1 Ratio</p>
        </div>
      </section>
      {/* INTRODUCE YOURSELF */}
      <section className="mt-0">
        <div className="max-w-[1282px] mx-auto">
          <label className="text-[24px] font-medium">Introduce yourself</label>

          <div className="mt-4 w-[1282px] h-[317px] bg-[#DFDFDF] rounded-[15px] relative overflow-hidden">
            <RichTextToolbar />

            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              maxLength={256}
              placeholder="Say something appealing about yourself..."
              className="w-full h-full p-6 text-[22px] bg-transparent resize-none outline-none"
            />

            <span className="absolute bottom-4 right-6 text-[16px] text-gray-600">
              {about.length}/256
            </span>
          </div>
        </div>
      </section>
      {/* YOUR SKILLS */}
      <section className="mt-24 max-w-[1282px] mx-auto">
        <label className="text-[24px] font-medium mb-4 block">
          Your skills
        </label>

        <div className="w-[1282px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
          {/* TOP BAR */}
          <div className="h-[77px] bg-[#444444] grid grid-cols-[2fr_3fr_1fr] items-center px-10 text-white text-[22px] font-medium">
            <span>Skill</span>
            <span>Level</span>
            <span className="text-right">Action</span>
          </div>

          {/* ROWS */}
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={`grid grid-cols-[2fr_3fr_1fr] items-center px-10 h-[74px]
        ${idx !== skills.length - 1 ? "border-b border-gray-300" : ""}`}
            >
              <span className="text-[22px]">{skill.name}</span>

              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <LevelCircle key={n} value={n} active={n <= skill.level} />
                ))}
              </div>

              <div className="flex justify-end">
                <div
                  onClick={() => deleteSkill(skill.id)}
                  className="w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center cursor-pointer"
                >
                  <img src="/icons/delete.svg" className="w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADD SKILL */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowAddSkill(true)}
            className="w-[180px] h-[55px] bg-[#8967B3] text-white rounded-[15px] text-[18px]"
          >
            Add a skill
          </button>
        </div>
      </section>
      {/* YOUR PROFILES */}
      <section className="mt-24 max-w-[1282px] mx-auto">
        <label className="text-[24px] font-medium mb-4 block">
          Your profiles
        </label>

        <div className="w-[1282px] bg-[#DFDFDF] rounded-[15px] overflow-hidden">
          {/* TOP BAR */}
          <div className="h-[77px] bg-[#444444] grid grid-cols-[2fr_3fr_1fr] items-center px-10 text-white text-[22px] font-medium">
            <span>Profile name</span>
            <span>URL</span>
            <span className="text-right">Action</span>
          </div>

          {links.map((p, idx) => (
            <div
              key={p.name}
              className={`grid grid-cols-[2fr_3fr_1fr] items-center px-10 h-[74px]
        ${idx !== links.length - 1 ? "border-b border-gray-300" : ""}`}
            >
              <span className="text-[22px]">{p.name}</span>
              <span className="text-[18px] text-gray-600">{p.url}</span>

              <div
                onClick={() => deleteLink(p.id)}
                className="flex justify-end"
              >
                <div className="w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center cursor-pointer">
                  <img src="/icons/delete.svg" className="w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADD LINK */}
        <div className="flex justify-end mt-4 w-[1282px] mx-auto">
          <button
            onClick={() => setShowAddLink(true)}
            className="w-[180px] h-[55px] bg-[#8967B3] text-white rounded-[15px] text-[18px]"
          >
            Add a link
          </button>
        </div>
      </section>
      {/* YOUR CV */}
      <section className="mt-24 max-w-[1282px] mx-auto">
        <label className="text-[24px] font-medium">
          Your CV <span className="text-red-500">(*.pdf)</span>
        </label>

        <p className="mt-2 text-[18px] text-gray-600">
          Adding your CV will help us to know you in details and suggest you to
          companies.
        </p>

        <div className="mt-6 flex w-[1282px]">
          <div className="w-[400px] h-[63px] border-[3px] border-[#8967B3] rounded-l-[10px] flex items-center justify-center px-6 text-[18px] text-gray-700">
            {cvFile ? (
              cvFile.name
            ) : (
              <div className="flex gap-2">
                <img src="/icons/dot.svg" className="w-2" />
                <img src="/icons/dot.svg" className="w-2" />
                <img src="/icons/dot.svg" className="w-2" />
              </div>
            )}
          </div>

          <input
            type="file"
            accept=".pdf"
            hidden
            id="cvUpload"
            onChange={handleCvUpload}
          />

          <button
            onClick={() => document.getElementById("cvUpload").click()}
            className="w-[174px] h-[63px] bg-[#8967B3] text-white rounded-r-[10px]"
          >
            Upload CV [.pdf]
          </button>
        </div>
      </section>

      {/* UPDATE PROFILE */}
      <section className="mt-24">
        <div className="w-[1282px] mx-auto flex justify-end">
          <button
            onClick={handleUpdateProfile}
            className="w-[220px] h-[60px] bg-[#8967B3] text-white rounded-[15px] text-[20px]"
          >
            Update profile
          </button>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mt-16 max-w-[1282px] mx-auto">
        <div className="h-[5px] bg-[#DFDFDF] rounded-[15px]" />
      </div>
      <p className="mt-6 mb-12 text-left mx-36 text-[18px]">
        <span className="text-red-500">*</span> fields are required
      </p>
    </main>
  );
};

export default EditProfileDetails;
