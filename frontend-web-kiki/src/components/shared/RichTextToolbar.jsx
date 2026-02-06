const RichTextToolbar = () => (
  <div className="h-[55px] bg-black rounded-t-[15px] flex items-center px-4 gap-4">
    <img
      src="/icons/bold.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />
    <img
      src="/icons/italic.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />
    <img
      src="/icons/strikethrough.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />

    <div className="w-[1px] h-full bg-gray-500" />

    <img
      src="/icons/list-bulleted.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />
    <img
      src="/icons/list-numbered.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />

    <div className="w-[1px] h-full bg-gray-500" />

    <img
      src="/icons/align-left.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />

    <div className="w-[1px] h-full bg-gray-500" />

    <img
      src="/icons/text-increase.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />
    <img
      src="/icons/text-decrease.svg"
      className="w-5 h-5 cursor-pointer invert brightness-0"
    />
  </div>
);

export default RichTextToolbar;
