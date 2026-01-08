const RichTextBox = ({ label, required }) => {
  return (
    <div>
      <label className="text-[25px] font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="mt-4 bg-[#DFDFDF] rounded-[15px] overflow-hidden">
        <div className="h-[61px] bg-[#444444] flex items-center gap-6 px-6">
          <img src="/icons/bold.svg" />
          <img src="/icons/italic.svg" />
          <img src="/icons/paragraph.svg" />
          <img src="/icons/a.svg" />
          <img src="/icons/a2.svg" />
        </div>

        <textarea className="w-full h-[200px] p-6 bg-transparent outline-none resize-none" />
      </div>
    </div>
  );
};

export default RichTextBox;
