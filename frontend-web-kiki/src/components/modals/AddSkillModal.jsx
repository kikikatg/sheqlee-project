import { useEffect, useState } from "react";

const LEVELS = ["Beginner", "Intermediate", "Expert"];
const LEVEL_MAP = {
  Beginner: 1,
  Intermediate: 3,
  Expert: 5,
};

const AddSkillModal = ({ onClose, onAdd, initialData = null }) => {
  const [skillName, setSkillName] = useState(initialData?.name || "");
  const [skillLevel, setSkillLevel] = useState("");

  const [openLevel, setOpenLevel] = useState(false);
  const [error, setError] = useState("");

  const isValid = skillName.trim() && skillLevel;

  // ESC CLOSE
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleSave = () => {
    if (!skillName || !skillLevel) return;

    onAdd({
      name: skillName,
      level: LEVEL_MAP[skillLevel],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Center wrapper */}
      <div className="relative flex items-center justify-center h-full">
        {/* Close Button (relative to wrapper, NOT viewport) */}
        <button
          onClick={onClose}
          className="
          absolute
          top-6 right-6
          lg:top-[50px] lg:right-[61px]
          w-[36px] h-[36px]
          lg:w-[100px] lg:h-[38px]
        "
        >
          <img
            src="/icons/close.svg"
            className="w-full h-full object-contain"
          />
        </button>

        {/* Modal Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="
          w-[732px] h-[441px]
          bg-white rounded-[20px]
          flex flex-col items-center
          pt-14
        "
        >
          <h2 className="text-[28px] font-medium mb-10">Add a new skill</h2>

          {/* INPUT */}
          <input
            value={skillName}
            onChange={(e) => {
              setSkillName(e.target.value);
              setError("");
            }}
            placeholder="Objective-C"
            className="
            w-[624px] h-[80px]
            bg-[#DFDFDF]
            rounded-[15px]
            px-6 text-[22px]
            outline-none
            mb-6
          "
          />

          {/* LEVEL DROPDOWN */}
          <div className="relative w-[624px] mb-10">
            <div
              onClick={() => setOpenLevel(!openLevel)}
              className="
              w-full h-[80px]
              bg-[#DFDFDF]
              rounded-[15px]
              px-6 text-[22px]
              flex items-center justify-between
              cursor-pointer
            "
            >
              <span className={skillLevel ? "text-black" : "text-gray-400"}>
                {skillLevel || "Skill level"}
              </span>

              <img
                src="/icons/arrow-down.svg"
                className={`w-4 transition-transform ${
                  openLevel ? "rotate-180" : ""
                }`}
              />
            </div>

            {openLevel && (
              <div
                className="
              absolute z-20 mt-2 w-full
              bg-white rounded-[15px]
              shadow-lg overflow-hidden
            "
              >
                {LEVELS.map((level) => (
                  <div
                    key={level}
                    onClick={() => {
                      setSkillLevel(level);
                      setOpenLevel(false);
                    }}
                    className="
                    px-6 py-4 text-[20px]
                    hover:bg-[#F2F2F2]
                    cursor-pointer
                  "
                  >
                    {level}
                  </div>
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-red-500 mb-4 text-[16px]">{error}</p>}

          {/* BUTTON */}
          <button
            onClick={handleSave}
            disabled={!isValid}
            className={`
            w-[355px] h-[74px]
            rounded-[15px]
            text-[22px]
            transition-all
            ${
              isValid ? "bg-[#8967B3] text-white" : "bg-[#000000] text-gray-500"
            }
          `}
          >
            Add skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;
