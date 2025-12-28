import { useState } from "react";

import Hero from "../layout/Hero";
import PopularTags from "../sections/PopularTags";
import LatestJobs from "../sections/LatestJobs";
import PlatformStats from "../sections/PlatformStats";
import Footer from "../footer/Footer";
import PopularTagsSkeleton from "../skeletons/PopularTagsSkeleton";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";
import PostAuthModal from "../modals/PostAuthModal";

const Home = () => {
  const isLoading = false;
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Hero openAuthModal={() => setShowAuthModal(true)} />

      {showAuthModal && (
        <PostAuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {isLoading ? <PopularTagsSkeleton /> : <PopularTags />}
      {isLoading ? <LatestJobsSkeleton /> : <LatestJobs />}
      <PlatformStats />
      <Footer />
    </>
  );
};

export default Home;
