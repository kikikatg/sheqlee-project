import SubNavbar from "../../all-jobs/SubNavbar";
import GuestNavbar from "../../layout/GuestNavbar";
import Footer from "../../footer/Footer";
import DeveloperCTA from "../../sections/DeveloperCTA";

const NotFound = ({ hideLayout = false }) => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* GLOBAL NAVBAR (only if NOT hidden) */}
      {!hideLayout && <GuestNavbar />}

      {/* Breadcrumb */}
      {!hideLayout && (
        <div className="hidden sm:block">
          <SubNavbar crumbs={[{ label: "Page Not Found", active: true }]} />
        </div>
      )}

      {/* Centered Content */}
      <section className="flex-1 flex items-center justify-center px-4 my-20 sm:my-24 md:my-30 lg:my-40">
        <div className="flex flex-col items-center text-center">
          <img
            src="/icons/error.svg"
            alt="Page not found"
            className="w-[81px] h-[108px] mb-10"
          />

          <h1
            className="
              text-[28px]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[40px]
              leading-[40px]
              font-normal
              text-[#444444]
            "
          >
            404 | PAGE NOT FOUND
          </h1>
        </div>
      </section>

      {/* FOOTER & CTA */}
      {!hideLayout && <DeveloperCTA />}
      {!hideLayout && <Footer />}
    </main>
  );
};

export default NotFound;
