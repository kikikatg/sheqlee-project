import { motion } from "framer-motion";
import PopularTags from "../components/sections/PopularTags";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-10 py-24 pb-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Recruit{" "}
                <span className="text-purple-800">Affordable</span> &{" "}
                <span className="text-purple-800">Skilled</span>{" "}
                Ethiopian Professionals
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl">
                Web frontend, mobile app, backend, database, full-stack,
                data science, UI/UX & product design, project management,
                scrum master, etc.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <button className="rounded-md bg-purple-800 px-8 py-4 text-base font-semibold text-white hover:bg-violet-700 transition">
                  Post Your Projects
                </button>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <motion.img
              src="/hero.png"
              alt="Sheqlee platform illustration"
              className="w-full max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ y: [0, -12, 0], opacity: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* POPULAR TAGS SECTION */}
      <PopularTags />
    </>
  );
};

export default Home;
