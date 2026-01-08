import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import DeveloperCTA from "../../sections/DeveloperCTA";
const NotFound = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <SubNavbar crumbs={[{ label: "Page Not Found", active: true }]} />

      {/* Centered Content */}
      <section className="flex-1 flex items-center justify-center px-4 my-40">
        <div className="flex flex-col items-center text-center">
          {/* Error icon */}
          <img
            src="/icons/error.svg"
            alt="Page not found"
            className="w-[81px] h-[108px] mb-10"
          />

          {/* Text */}
          <h1
            className="
              text-[40px]
              leading-[40px]
              font-normal
              text-[#444444] my-12 mb-0
            "
          >
            404 | PAGE NOT FOUND
          </h1>
        </div>
      </section>
      <DeveloperCTA />
    </main>
  );
};

export default NotFound;
