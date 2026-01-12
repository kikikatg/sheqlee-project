import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

const Hero = ({ openAuthModal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (openAuthModal) {
      openAuthModal(); // guest behavior (auth modal)
    } else {
      navigate("/user/post-job"); // user behavior
    }
  };

  return (
    <section className="bg-white overflow-hidden">
      <div
        className="
          max-w-[1920px] mx-auto
          px-4 sm:px-8 md:px-16 lg:px-[140px]
          pt-10 sm:pt-14 md:pt-[70px]
          pb-10 sm:pb-14 md:pb-[60px]
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-[550px_1fr]
            items-center
            gap-12 lg:gap-0
          "
        >
          {/* LEFT CONTENT */}
          <div className="font-['Kantumruy_Pro'] text-center lg:text-left">
            <h1
              className="font-semibold text-black
              text-[34px] leading-[44px]
              sm:text-[42px] sm:leading-[52px]
              md:text-[50px] md:leading-[60px]
              lg:text-[58px] lg:leading-[68px]"
            >
              Recruit <span className="text-[#8967B3]">Affordable</span>
              <br />
              &amp; <span className="text-[#8967B3]">Skilled</span> Ethiopian
              <br />
              Professional
            </h1>

            <p
              className="
              mt-4 sm:mt-5 text-black
              text-[16px] leading-[26px]
              sm:text-[18px] sm:leading-[30px]
              md:text-[20px] md:leading-[34px]
              lg:text-[24px] lg:leading-[38px]
              max-w-[520px]
              mx-auto lg:mx-0"
            >
              Web frontend, mobile app, backend, database,
              <br />
              full-stack, data science, UI/UX &amp; product design,
              <br />
              project management, scrum master, etc.
            </p>

            <button
              onClick={handleClick}
              className="
                mt-6 sm:mt-8
                w-[260px] h-[56px]
                sm:w-[320px] sm:h-[66px]
                md:w-[380px] md:h-[74px]
                lg:w-[420px] lg:h-[82px]
                bg-[#8967B3]
                rounded-[14px] sm:rounded-[16px] lg:rounded-[18px]
                flex items-center justify-center
                mx-auto lg:mx-0
                hover:opacity-90 transition"
            >
              <span
                className="
                font-semibold text-white
                text-[16px] sm:text-[20px]
                md:text-[24px] lg:text-[28px]"
              >
                Post your projects
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-start overflow-hidden">
            <div className="lg:pr-[24px] xl:pr-[60px] w-full">
              <Player
                autoplay
                loop
                speed={1}
                src="/lottie/hero.json"
                className="
                  mx-auto max-w-[90vw]
                  w-[260px] h-[200px]
                  sm:w-[360px] sm:h-[280px]
                  md:w-[420px] md:h-[320px]
                  lg:w-[440px] lg:h-[330px]
                  xl:w-[680px] xl:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
