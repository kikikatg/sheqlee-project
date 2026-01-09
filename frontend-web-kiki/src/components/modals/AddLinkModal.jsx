import { useEffect, useState } from "react";

const AddLinkModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const isValid = name.trim() && url.trim();
  const handleSave = () => {
    if (!isValid) return;

    onAdd({
      id: crypto.randomUUID(),
      name,
      url,
    });

    onClose();
  };
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative flex items-center justify-center h-full">
        {/* Close Button */}
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
          <h2 className="text-[28px] font-medium mb-10">Add a new link</h2>

          <input
            placeholder="Link name (eg. GitHub or LinkedIn)"
            className="
            w-[624px] h-[80px]
            bg-[#DFDFDF]
            rounded-[15px]
            px-6 text-[22px]
            outline-none
            mb-6
          "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="URL"
            className="
            w-[624px] h-[80px]
            bg-[#DFDFDF]
            rounded-[15px]
            px-6 text-[22px]
            outline-none
            mb-10
          "
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            onClick={handleSave}
            disabled={!isValid}
            className={`
    w-[355px] h-[74px]
    rounded-[15px]
    text-[22px]
    ${isValid ? "bg-[#8967B3] text-white" : "bg-[#000000] text-gray-500"}
  `}
          >
            Add link
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLinkModal;
