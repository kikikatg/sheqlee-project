const RichTextToolbar = () => (
  <div className="h-[55px] bg-black rounded-t-[15px] flex items-center px-4 gap-4">

    {/* ICON 1 */}
    <img src="/icons/bold.svg" className="w-5" />

    {/* ICON 2 */}
    <img src="/icons/italic.svg" className="w-5" />

    {/* ICON 3 */}
    <img src="/icons/underline.svg" className="w-5" />

    {/* DIVIDER */}
    <div className="w-[1px] h-full bg-gray-500" />

    {/* ICON 4 */}
    <img src="/icons/list.svg" className="w-5" />

    {/* ICON 5 */}
    <img src="/icons/ordered-list.svg" className="w-5" />

    {/* DIVIDER */}
    <div className="w-[1px] h-full bg-gray-500" />

    {/* ICON 6 */}
    <img src="/icons/link.svg" className="w-5" />

    {/* DIVIDER */}
    <div className="w-[1px] h-full bg-gray-500" />

    {/* ICON 7 */}
    <img src="/icons/image.svg" className="w-5" />

    {/* ICON 8 */}
    <img src="/icons/code.svg" className="w-5" />
  </div>
);
export default RichTextToolbar;
