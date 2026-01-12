import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";

const JobTemplates = () => {
  return (
    <main className="min-h-screen bg-white">
      <SubNavbar crumbs={[{ label: "Job Templates", active: true }]} />

      <section className="max-w-[1200px] mx-auto px-6 mt-20 text-center">
        <h1 className="text-[48px] font-semibold">Job Templates</h1>
        <p className="mt-6 text-[22px] text-gray-600">
          Create jobs faster using reusable templates.
        </p>

        {/* API READY */}
        <div className="mt-16 text-gray-500 text-[20px]">
          Templates will be loaded from API.
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JobTemplates;
