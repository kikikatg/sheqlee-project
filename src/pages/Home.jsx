import Hero from "../components/layout/Hero";
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
    <Hero />
     {isLoading ? <PopularTagsSkeleton /> : <PopularTags />}
{isLoading ? <LatestJobsSkeleton /> : <LatestJobs />}
<PlatformStats />
<Footer />
    </>
  );
};

export default Home;
