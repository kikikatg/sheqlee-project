import { useEffect } from "react";

const PostAuthModal = ({ onClose }) => {
 //ESC CLOSE//
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* 🔴 Overlay (click outside closes modal) */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* ❌ Close Button (outside modal) */}
      <button
        onClick={onClose}
        className="
          absolute z-50
          top-4 right-4
          sm:top-6 sm:right-8
          lg:top-[21px] lg:right-[61px]
          w-[32px] h-[32px]
          sm:w-[40px] sm:h-[40px]
          lg:w-[100px] lg:h-[30px]
        "
      >
        <img
          src="/icons/close.svg"
          alt="Close modal"
          className="w-full h-full object-contain"
        />
      </button>

      {/* ⚪ Modal Wrapper */}
      <div className="relative flex items-center justify-center h-full px-4">
        {/* ⚪ Modal Container */}
        <div
          onClick={(e) => e.stopPropagation()} // ⛔ prevent overlay close
          className="
            bg-white rounded-[20px]
            flex flex-col items-center justify-center
            w-full max-w-[90vw]
            sm:max-w-[500px]
            lg:w-[530px]
            min-h-[220px]
            lg:h-[250px]
            px-6
            lg:px-0
          "
        >
          {/* Prompt Message */}
          <p
            className="
              text-center font-medium text-black
              text-[18px] leading-[26px]
              sm:text-[20px] sm:leading-[28px]
              lg:text-[22px] lg:leading-[30px]
              max-w-[400px]
            "
          >
            Please register or login as a
            <br />
            client to post jobs.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex flex-col gap-4
              sm:flex-row sm:gap-6
              lg:mt-14 lg:gap-10
            "
          >
            {/* Sign up */}
            <button
              className="
                w-full sm:w-[140px]
                h-[56px] sm:h-[64px] lg:h-[70px]
                bg-[#8967B3]
                rounded-[15px]
                text-white
                text-[18px] lg:text-[22px]
                font-medium
              "
            >
              Sign up
            </button>

            {/* Log in */}
            <button
              className="
                w-full sm:w-[140px]
                h-[56px] sm:h-[64px] lg:h-[70px]
                border-[3px] lg:border-[4px]
                border-[#8967B3]
                rounded-[15px]
                text-[#8967B3]
                text-[18px] lg:text-[22px]
                font-medium
              "
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthModal;
