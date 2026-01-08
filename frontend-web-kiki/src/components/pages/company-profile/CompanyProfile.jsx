import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../forms/TextInput";
import RichTextToolbar from "../../shared/RichTextToolbar";

const CompanyProfile = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    domain: "",
    size: "",
    location: "",
  });

  const [description, setDescription] = useState("");

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* HEADER */}
      <section className="flex flex-col items-center mt-10">
        <img src="/icons/company (1).svg" className="w-[100px] h-[100px]" />

        <h1 className="mt-10 text-[60px] font-semibold">
          Company Profile
        </h1>

        <p className="mt-6 text-center text-[30px] leading-[40px] max-w-[650px]">
          Provide accurate information about your company <br />
          to make yourself discoverable.
        </p>
      </section>
{/* COMPANY NAME / DOMAIN / LOGO */}
<section className="mt-24 max-w-[1282px] mx-auto flex items-start gap-[37px]">

  {/* COMPANY NAME */}
  <div className="w-[525px]">
    <label className="text-[24px] font-medium">
      Company name <span className="text-red-500">*</span>
    </label>

    <div className="mt-4 relative w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px]">
      <input
        value={form.company}
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
        placeholder="Sheqlee Co.Ltd."
        className="w-full h-full bg-transparent px-6 text-[22px] outline-none"
      />

      <img
        src="/icons/edit-dark.svg"
        alt="edit"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
      />
    </div>
  </div>

  {/* DOMAIN */}
  <div className="w-[525px]">
    <label className="text-[24px] font-medium">
      Domain <span className="text-red-500">*</span>
    </label>

    <div className="mt-4 relative w-[525px] h-[80px] bg-[#DFDFDF] rounded-[15px] flex items-center">
      <span className="pl-6 pr-2 text-[20px] text-gray-600">
        https://
      </span>

      <input
        value={form.domain}
        onChange={(e) =>
          setForm({ ...form, domain: e.target.value })
        }
        placeholder="sheqlee.com"
        className="flex-1 h-full bg-transparent text-[22px] outline-none"
      />

      <img
        src="/icons/edit-dark.svg"
        alt="edit"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
      />
    </div>
  </div>

  {/* LOGO + BUTTON */}
  <div className="flex flex-col items-center ml-auto">
    {/* LOGO CONTAINER */}
    <div className="w-[141px] h-[141px] rounded-full bg-[#DFDFDF] flex items-center justify-center">
      <img src="/icons/set.svg" alt="logo" className="w-12 h-12" />
    </div>

    {/* UPLOAD BUTTON */}
    <button className="mt-4 w-[158px] h-[50px] bg-[#8967B3] text-white rounded-[10px]">
      Upload
    </button>

    {/* INFO TEXT */}
    <p className="mt-2 text-[14px] text-gray-500">
      2MB Max | 1:1 Ratio
    </p>
  </div>
</section>


      {/* DESCRIPTION */}
    
<section className="mt-2">
  <div className="max-w-[1282px] mx-auto">
    <label className="text-[24px] font-medium">
      Description <span className="text-red-500">*</span>
    </label>

    <div className="mt-4 w-[1282px] h-[317px] bg-[#DFDFDF] rounded-[15px] relative overflow-hidden">
      <RichTextToolbar />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={256}
        placeholder="A brief description about your company..."
        className="w-full h-full p-6 text-[22px] bg-transparent resize-none outline-none"
      />

      <span className="absolute bottom-4 right-6 text-[16px] text-gray-600">
        {description.length}/256
      </span>
    </div>
  </div>
</section>


   {/* COMPANY SIZE + HQ LOCATION */}

  <section className="mt-24">
  <div className="max-w-[1282px] mx-auto flex gap-[30px] justify-between">

    {/* COMPANY SIZE */}
    <div className="w-[626px]">
      <label className="text-[24px] font-medium">
        Company size <span className="text-red-500">*</span>
      </label>

      <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px]">
        <select
          value={form.size}
          onChange={(e) => setForm({ ...form, size: e.target.value })}
          className="w-full h-full bg-transparent px-6 pr-14 text-[22px] appearance-none outline-none"
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
    <div className="w-[626px]">
      <label className="text-[24px] font-medium">
        HQ location <span className="text-red-500">*</span>
      </label>

      <div className="mt-4 relative w-full h-[80px] bg-[#DFDFDF] rounded-[15px]">
        <input
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder="Addis Ababa, Ethiopia"
          className="w-full h-full bg-transparent px-6 pr-14 text-[22px] outline-none"
        />

        <img
          src="/icons/edit-dark.svg"
          alt="edit"
          className="absolute right-6 top-1/2 -translate-y-1/2 w-[18px]"
        />
      </div>
    </div>

  </div>
</section>


<section className="mt-10">
  <div className="max-w-[1282px] mx-auto flex justify-end">
    <div className="w-[626px] flex justify-end">
      <button
        className="w-[282px] h-[85px] bg-[#8967B3] text-white text-[22px] rounded-[15px] flex items-center justify-center"
      >
        Update profile
      </button>
    </div>
  </div>
    {/* DIVIDER */}
      <div className="mt-16 max-w-[1282px] mx-auto">
        <div className="h-[5px] bg-[#DFDFDF] rounded-[15px]" />
      </div>
        <p className="mt-6 mb-12 text-left mx-36 text-[18px]">
        <span className="text-red-500">*</span> fields are required
       </p>
      </section>
      <Footer />
    </main>
  );
};

export default CompanyProfile;
