import Footer from "../../footer/Footer";
import SubNavbar from "../../all-jobs/SubNavbar";
const StatusPill = ({ color, position }) => {
  const dotPosition =
    position === "left"
      ? "justify-start"
      : position === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className="w-[63px] h-[28px] rounded-[7px] flex items-center px-[4px]"
      style={{ border: `3px solid ${color}` }}
    >
      <div className={`flex w-full ${dotPosition}`}>
        <div
          className="w-[20px] h-[20px] rounded-[7px]"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};
const ActionIcon = ({ icon }) => (
  <div className="w-[63px] h-[53px] bg-[#8967B3] rounded-[7px] flex items-center justify-center">
    <img src={`/icons/${icon}`} className="w-6 h-6" />
  </div>
);

const DashboardDetail = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <SubNavbar crumbs={[{ label: "Dashboard", active: true }]} />

      {/* HEADER */}
      <section className="flex flex-col items-center mt-6">

      {/* DASHBOARD TITLE */}
        <img
          src="/icons/dashboard.svg"
          alt="Dashboard"
          className="w-[74px] h-[74px]"
        />
      {/* DASHBOARD TITLE */}
      <h1
        className="
          mt-[41px]
          text-[60px]
          font-semibold
          text-black
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
        Dashboard
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          mt-[25px]
          max-w-[632px]
          text-center
          text-[35px]
          leading-[40px]
          text-black
        "
        style={{ fontFamily: "Kantumruy Pro" }}
      >
          All the jobs you have posted and 
                <br/> are about to post.
        </p>
      </section>

      {/* TABLE CONTAINER */}
      <section className="mt-20 flex justify-center mx-12 mb-20">
        <div className="w-[1782px] bg-[#F7F7F7] rounded-[20px]">
          {/* Table content will go here */}
          {/* TABLE HEADER */}
<div className="h-[90px] bg-[#E6E6E6] rounded-t-[20px] grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 text-[20px] font-medium">
  <span>JID</span>
  <span>Title</span>
  <span>Type</span>
  <span>Level</span>
  <span>Status</span>
  <span>Actions</span>
</div>
{/* ROW 1 */}
<div className="grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 h-[110px] border-b border-[#DFDFDF]">
  <span>1</span>
  <span>Senior mobile app developer</span>
  <span>Full-time</span>
  <span>Senior</span>
  <StatusPill color="#444444" position="center" />
  <div className="flex gap-4 items-center">
    <ActionIcon icon="duplicate.svg" />
    <button className="w-[166px] h-[53px] bg-black text-white rounded-[7px]">
      Publish
    </button>
    <ActionIcon icon="edit.svg" />
    <div className="flex gap-4 items-center relative">
      <ActionIcon icon="delete.svg" />
      <span className="absolute top-[50px] left-0 bg-[#DFDFDF] px-4 py-0 rounded-[5px] text-[14px]">
        Delete draft
      </span>
    </div>
  </div>
</div>

{/* ROW 2 */}
<div className="grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 h-[110px] border-b border-[#DFDFDF]">
  <span>2</span>
  <span>Python backend developer</span>
  <span>Part-time</span>
  <span>Lead</span>
  <StatusPill color="#11B949" position="right" />
  <div className="flex gap-4 items-center relative">
    <ActionIcon icon="duplicate.svg" />
    <ActionIcon icon="view.svg" />
    <ActionIcon icon="delete.svg" />
      <span className="absolute top-[50px] left-0 bg-[rgb(223,223,223)] px-4 py-0 rounded-[5px] text-[14px]">
      Duplicate vacancy
    </span>
  </div>
</div>

{/* ROW 3 */}
<div className="grid grid-cols-[80px_1fr_160px_160px_160px_420px] items-center px-8 h-[110px]">
  <span>3</span>
  <span>UI/UX designer</span>
  <span>Part-time</span>
  <span>Middle</span>
  <StatusPill color="#F32424" position="left" />
  <div className="flex gap-4 items-center relative">
    <ActionIcon icon="duplicate.svg" />
    <div className="relative">
      <ActionIcon icon="view.svg" />
      <span className="absolute top-[50px] left-0 bg-[rgb(223,223,223)] px-4 py-0 rounded-[5px] text-[14px]">
        View details
      </span>
    </div>
    <ActionIcon icon="delete.svg" />
  </div>
</div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DashboardDetail;
