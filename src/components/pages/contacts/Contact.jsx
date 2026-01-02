import { useState } from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

const MAX_CHARS = 512;

const Contact = () => {
  const [message, setMessage] = useState("");

  return (
    <main className="bg-white min-h-screen">
      <SubNavbar crumbs={[{ label: "Contact", active: true }]} />

      {/* ================= HEADER ================= */}
      <section className="pt-14 sm:pt-10 px-4 text-center">
        <img
          src="/icons/contact.svg"
          alt="Contact"
          className="w-[60px] sm:w-[70px] lg:w-[80px] mx-auto"
        />

        <h1 className="mt-4 sm:mt-8 text-[30px] sm:text-[40px] lg:text-[56px] font-semibold">
          Contact
        </h1>

        <p className="mt-4 sm:mt-6 max-w-[720px] mx-auto text-[18px] sm:text-[22px] lg:text-[32px] leading-snug">
          Please reach out to us if you have any questions or you need
          our assistance with something.
        </p>
      </section>

      {/* ================= FORM ================= */}
      <section className="mt-14 sm:mt-20 px-4">
        <div className="max-w-[1342px] mx-auto">

          {/* SUBJECT + EMAIL */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">

            {/* SUBJECT */}
            <div className="w-full md:max-w-[650px]">
              <Label text="Subject" />
              <InputBlock
                icon="/icons/idea.svg"
                placeholder="Regarding Posting a Job"
              />
            </div>

            {/* EMAIL */}
            <div className="w-full md:max-w-[650px] md:ml-auto">
              <Label text="Your Email" />
              <InputBlock
                icon="/icons/email.svg"
                placeholder="abebe@gmail.com"
                type="email"
              />
            </div>
          </div>

          {/* MESSAGE + SEND */}
          <div className="mt-10 sm:mt-12 flex flex-col gap-6">
            <div className="relative w-full bg-[#DFDFDF] rounded-[15px] h-[260px] sm:h-[300px] lg:h-[357px]">
              <textarea
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value.slice(0, MAX_CHARS))
                }
                placeholder="Write your message down..."
                className="
                  w-full h-full bg-transparent
                  p-4 sm:p-6 resize-none outline-none
                  text-[18px] sm:text-[24px] lg:text-[30px]
                  text-[#444444]
                "
              />

              <span className="absolute bottom-3 right-4 text-sm sm:text-lg text-[#444444]">
                {message.length}/{MAX_CHARS}
              </span>
            </div>

            <div className="flex justify-end">
              <button
                className="
                  w-full sm:w-[220px] lg:w-[280px]
                  h-[60px] sm:h-[70px] lg:h-[85px]
                  bg-[#8967B3]
                  rounded-[15px]
                  text-white
                  text-[18px] sm:text-[24px] lg:text-[30px]
                  font-medium hover:opacity-90 transition
                "
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

/* ================= LABEL ================= */
const Label = ({ text }) => (
  <div className="mb-2 text-[16px] sm:text-[18px] lg:text-[22px] font-medium">
    {text}
  </div>
);

/* ================= INPUT BLOCK ================= */
const InputBlock = ({ icon, placeholder, type = "text" }) => (
  <div
    className="
      flex w-full
      h-[60px] sm:h-[70px] lg:h-[85px]
      bg-[#DFDFDF]
      rounded-[15px]
      overflow-hidden
    "
  >
    <div className="w-[60px] sm:w-[70px] lg:w-[85px] bg-black flex items-center justify-center rounded-l-[15px]">
      <img
        src={icon}
        alt=""
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9"
      />
    </div>

    <input
      type={type}
      placeholder={placeholder}
      className="
        flex-1 bg-transparent
        px-4 sm:px-6 outline-none
        text-[18px] sm:text-[24px] lg:text-[30px]
        text-[#444444]
      "
    />
  </div>
);

export default Contact;
