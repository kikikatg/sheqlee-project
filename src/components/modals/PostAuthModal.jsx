import { useEffect } from "react";

const PostAuthModal = ({
  onClose,
  titleLines = [
    "Please register or login as a",
    "client to post jobs.",
  ],
}) => {
  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="
          absolute z-50
          top-3 right-8
          sm:top-6 sm:right-8
          lg:top-[50px] lg:right-[61px]
          w-[36px] h-[36px]
          sm:w-[46px] sm:h-[46px]
          lg:w-[100px] lg:h-[38px]
        "
      >
        <img
          src="/icons/close.svg"
          alt="Close modal"
          className="w-full h-full object-contain"
        />
      </button>

      {/* Modal */}
      <div className="relative flex items-center justify-center h-full px-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            bg-white rounded-[20px]
            flex flex-col items-center justify-center
            w-full max-w-[90vw]
            sm:max-w-[500px]
            lg:w-[530px]
            min-h-[220px]
            lg:h-[250px]
            px-6
          "
        >
          {/* Message */}
          <p className="text-center font-medium text-black text-[18px] sm:text-[22px] lg:text-[26px] leading-[29px]">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <button
              className="
                w-[140px] h-[56px] lg:h-[70px]
                bg-[#8967B3]
                rounded-[15px]
                text-white text-[18px] lg:text-[22px]
                font-medium
              "
            >
              Sign up
            </button>

            <button
              className="
                w-[140px] h-[56px] lg:h-[70px]
                border-[3px] border-[#8967B3]
                rounded-[15px]
                text-[#8967B3] text-[18px] lg:text-[22px]
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
