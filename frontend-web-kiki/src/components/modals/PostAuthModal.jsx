import { useEffect } from "react";
import { Link } from "react-router-dom";

const PostAuthModal = ({
  onClose,
  titleLines = ["Please register or login as a", "client to post jobs."],
}) => {
  // ================= ESC CLOSE =================
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* ================= CLOSE BUTTON ================= */}
      <button
        onClick={onClose}
        className="
          fixed z-50
          top-0 right-3
          sm:top-20 sm:right-12
          lg:top-12 lg:right-18
          w-6 h-6 sm:w-10 sm:h-10
        "
      >
        <img
          src="/icons/close.svg"
          alt="Close modal"
          className="lg:w-full lg:h-full sm:h-7 sm:w-7 w-6 h-6 object-contain"
        />
      </button>

      {/* ================= MODAL WRAPPER ================= */}
      <div className="relative flex items-center justify-center h-full px-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            bg-white rounded-[20px]
            flex flex-col items-center justify-center
            w-full
            max-w-[320px] sm:max-w-[500px]
            min-h-[200px] sm:min-h-[220px]
            lg:w-[530px] lg:h-[250px]
            px-4 sm:px-6
          "
        >
          {/* ================= MESSAGE ================= */}
          <p
            className="
              text-center font-medium text-black
              text-[15px] sm:text-[20px] lg:text-[26px]
              leading-relaxed
            "
          >
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="mt-8 sm:hidden w-full flex justify-center">
            <Link to="/freelancer-signup">
              <button
                className="
                  w-[200px] h-[46px]
                  bg-[#8967B3]
                  rounded-[15px]
                  text-white text-[18px]
                  font-medium
                "
              >
                OK, Sign up
              </button>
            </Link>
          </div>

          {/* ================= DESKTOP / TABLET BUTTONS ================= */}
          <div className="hidden sm:flex mt-10 gap-6">
            <Link to="/freelancer-signup">
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
            </Link>

            <Link to="/login">
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthModal;
