const ContinueWithGoogle = ({ role }) => {
  const handleGoogleAuth = () => {
    // 🔐 Backend OAuth endpoint
    window.location.href = `/api/auth/google?role=${role}`;
  };

  return (
    <button
      onClick={handleGoogleAuth}
      className=" [@media(min-width:300px)_and_(max-width:700px)]:w-[300px]
        w-[554px] h-[80px]
        bg-[#4285F4]
        rounded-[15px]
        flex items-center justify-center gap-4
        text-white text-[20px]
    md:text-[22px] sm:text-[18px]  "
    >
      <img
        src="/icons/Icon ionic-logo-google.svg"
        alt="Google"
        className="w-6 h-6 sm:w-3 sm:h-3"
      />
      Continue with Google
    </button>
  );
};

export default ContinueWithGoogle;
