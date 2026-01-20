import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useState, useRef } from "react";

import TextInput from "../../forms/TextInput";
import RichTextToolbar from "../../shared/RichTextToolbar";
import { useUser } from "../../../context/UserContext";

const CompanyProfile = () => {
  const { user, setUser } = useUser();

  const companyRef = useRef(null);
  const domainRef = useRef(null);
  const locationRef = useRef(null);

  const [form, setForm] = useState({
    company: user?.companyProfile?.name || "",
    domain: user?.companyProfile?.domain || "",
    size: user?.companyProfile?.size || "",
    location: user?.companyProfile?.location || "",
  });

  const [description, setDescription] = useState(
    user?.companyProfile?.description || ""
  );

  const [logoPreview, setLogoPreview] = useState(
    user?.companyProfile?.logo || ""
  );

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* HEADER */}
      <section className="flex flex-col items-center mt-10 px-4">
        <img
          src="/icons/building.svg" // always the same
          className="w-[100px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] h-[100px] object-contain"
        />

        <h1 className="mt-10 text-[60px] font-semibold text-center  ">
          Company Profile
        </h1>

        <p className="mt-6 text-center lg:text-[30px] sm:text-[26px] md:text-[28px] leading-[40px] max-w-[800px]  ">
          Provide accurate information about your company <br />
          to make yourself discoverable.
        </p>
      </section>

      {/* COMPANY NAME / DOMAIN / LOGO */}
      <section className="mt-24 px-4">
        <div className="max-w-[1282px] mx-auto flex flex-col lg:flex-row gap-[30px] justify-between">
          {/* COMPANY NAME */}
          <div className="w-full max-w-[525px]">
            <label className="text-[24px]  font-medium">
              Company name <span className="text-red-500">*</span>
            </label>

            <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px]">
              <input
                ref={companyRef}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Sheqlee Co.Ltd."
                className="w-full h-full  bg-transparent px-6 text-[22px] outline-none"
              />

              <img
                src="/icons/edit-dark.svg"
                alt="edit"
                onClick={() => companyRef.current?.focus()}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
              />
            </div>
          </div>

          {/* DOMAIN */}
          <div className="w-full max-w-[525px]">
            <label className="text-[24px] font-medium">
              Domain <span className="text-red-500">*</span>
            </label>

            <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center">
              <span className="pl-6 pr-2 text-[20px] text-gray-600">
                https://
              </span>

              <input
                ref={domainRef}
                value={form.domain}
                onChange={(e) => setForm({ ...form, domain: e.target.value })}
                placeholder="sheqlee.com"
                className="flex-1 h-full  bg-transparent text-[22px] outline-none"
              />

              <img
                src="/icons/edit-dark.svg"
                alt="edit"
                onClick={() => domainRef.current?.focus()}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
              />
            </div>
          </div>

          {/* LOGO + UPLOAD */}
          <div className="flex flex-col items-center">
            <div className="w-[141px] h-[141px] rounded-full bg-[#DFDFDF] flex items-center justify-center overflow-hidden">
              {logoPreview ? (
                <img
                  src={logoPreview}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src="/icons/set.svg" alt="logo" className="w-12 h-12" />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              id="logoUpload"
              hidden
              onChange={(e) => {
                const file = e.target.files[0];
                if (!file) return;

                if (file.size > 2 * 1024 * 1024) {
                  alert("Image must be under 2MB");
                  return;
                }

                const reader = new FileReader();
                reader.onloadend = () => {
                  setLogoPreview(reader.result); // only update local preview
                };
                reader.readAsDataURL(file);
              }}
            />

            <button
              onClick={() => document.getElementById("logoUpload").click()}
              className="mt-4 w-[158px] h-[50px] bg-[#8967B3] text-white rounded-[10px]  "
            >
              Upload
            </button>

            <p className="mt-2 text-[14px]   text-gray-500">
              2MB Max | 1:1 Ratio
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="mt-12 px-4">
        <div className="max-w-[1282px] mx-auto ">
          <label className="text-[24px]  font-medium ">
            Description <span className="text-red-500">*</span>
          </label>

          <div className="mt-4 bg-[#DFDFDF] w-full h-[317px] rounded-[15px] relative overflow-hidden">
            <RichTextToolbar />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={256}
              placeholder="A brief description about your company..."
              className="w-full h-full p-6 text-[22px] 
               bg-transparent resize-none outline-none"
            />

            <span className="absolute bottom-4  right-6 text-[16px] text-gray-600">
              {description.length}/256
            </span>
          </div>
        </div>
      </section>

      {/* COMPANY SIZE + HQ LOCATION */}
      <section className="mt-24 px-4">
        <div className="max-w-[1282px] mx-auto flex flex-col lg:flex-row gap-[30px] justify-between">
          {/* COMPANY SIZE */}
          <div className="w-full max-w-[626px]">
            <label className="text-[24px]  font-['Kantumruy_Pro'] font-medium">
              Company size <span className="text-red-500">*</span>
            </label>

            <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px]">
              <select
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="w-full h-full bg-transparent px-6 pr-14  font-['Kantumruy_Pro'] text-[22px] appearance-none outline-none"
              >
                <option value="">Select company size</option>
                <option>Less than 10 people</option>
                <option>10 to 20 people</option>
                <option>20 to 50 people</option>
                <option>50 to 100 people</option>
                <option>100 to 1000 people</option>
                <option>More than 1000 people</option>
              </select>

              <img
                src="/icons/arrow-down.svg"
                alt="arrow"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
              />
            </div>
          </div>

          {/* HQ LOCATION */}
          <div className="w-full max-w-[626px]">
            <label className="text-[24px] font-['Kantumruy_Pro'] font-medium">
              HQ location <span className="text-red-500">*</span>
            </label>

            <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px]">
              <input
                ref={locationRef}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Addis Ababa, Ethiopia"
                className="w-full h-full bg-transparent px-6 pr-14  font-['Kantumruy_Pro'] text-[22px] outline-none"
              />

              <img
                src="/icons/edit-dark.svg"
                alt="edit"
                onClick={() => locationRef.current?.focus()}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UPDATE */}
      <section className="mt-10 px-4">
        <div className="max-w-[1282px] mx-auto flex justify-end">
          <div className="w-full max-w-[626px] flex justify-end">
            <button
              onClick={() => {
                setUser((prev) => ({
                  ...prev,
                  companyProfile: {
                    name: form.company,
                    logo: logoPreview,
                    domain: form.domain,
                    size: form.size,
                    location: form.location,
                    description,
                  },
                }));
              }}
              className="w-[282px] h-[85px] bg-[#8967B3] text-white text-[22px] rounded-[15px] flex items-center px-10 justify-center"
            >
              Update profile
            </button>
          </div>
        </div>

        <div className="mt-16 max-w-[1282px] mx-auto">
          <div className="h-[5px] bg-[#DFDFDF] rounded-[15px]" />
        </div>

        <p className="mt-6 mb-12 text-left text-[18px] max-w-[1282px] mx-auto  ">
          <span className="text-red-500">*</span> fields are required
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default CompanyProfile;
