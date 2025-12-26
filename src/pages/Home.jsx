import { motion } from "framer-motion";
import PopularTags from "../components/sections/PopularTags";
import LatestJobs from "../components/sections/LatestJobs";
import PlatformStats from "../components/sections/PlatformStats";
import Footer from "../components/footer/Footer";
import PopularTagsSkeleton from "../components/skeletons/PopularTagsSkeleton";
import LatestJobsSkeleton from "../components/skeletons/LatestJobsSkeleton";

const Home = () => {
  const isLoading = false; // simulate API loading

  return (
    <>
      {/* HERO */}
   <section className="bg-white text-center md:text-left">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">

                Recruit <span className="text-purple-800">Affordable</span> &{" "}
                <span className="text-purple-800">Skilled</span>{" "}
                Ethiopian Professionals
              </h1>

             <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Web frontend, mobile app, backend, database, full-stack,
                data science, UI/UX & product design, project management,
                scrum master, etc.
              </p>

              <div className="mt-10">
                <button className="rounded-md bg-[#704cb8]  px-8 py-4 text-base font-semibold text-white hover:bg-violet-700 transition">
                  Post Your Projects
                </button>
              </div>
            </div>

            <motion.img
  src="/hero.png"
  className="w-full max-w-ls sm:max-w-md lg:max-w-lg mx-auto md:mx-0"
              initial={{  y: 30 }}
              animate={{ y: [0, -12, 0]}}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
        </div>
      </section>

     {isLoading ? <PopularTagsSkeleton /> : <PopularTags />}
{isLoading ? <LatestJobsSkeleton /> : <LatestJobs />}

       <PlatformStats />
       <Footer/>
    </>
  );
};

export default Home;
