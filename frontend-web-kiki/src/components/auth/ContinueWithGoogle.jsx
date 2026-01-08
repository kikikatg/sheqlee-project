import { useNavigate } from "react-router-dom";

const GoogleButton = ({ to = "/google-auth" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="
        w-[554px] h-[80px]
        bg-[#4285F4]
        rounded-[15px]
        flex items-center justify-center gap-4
        text-white text-[30px]
      "
    >
      <img
        src="/icons/Icon ionic-logo-google.svg"
        alt="Google"
        className="w-6 h-6"
      />
      Continue with Google
    </button>
  );
};

export default GoogleButton;
