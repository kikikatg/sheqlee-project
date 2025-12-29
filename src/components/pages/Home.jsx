import { useState } from "react";

import Hero from "../layout/Hero";
import PopularTags from "../sections/PopularTags";
import LatestJobs from "../sections/LatestJobs";
import PlatformStats from "../sections/PlatformStats";
import Footer from "../footer/Footer";
import PopularTagsSkeleton from "../skeletons/PopularTagsSkeleton";
import LatestJobsSkeleton from "../skeletons/LatestJobsSkeleton";
import PostAuthModal from "../modals/PostAuthModal";
import { mockJobs } from "../../data/mockJobs";

const Home = () => {
  const isLoading = false;
  const [showAuthModal, setShowAuthModal] = useState(false);

  // ✅ Show only latest 6 jobs on Home
  const latestJobs = mockJobs.slice(0, 9);

  return (
    <>
      <Hero openAuthModal={() => setShowAuthModal(true)} />

      {showAuthModal && (
        <PostAuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {isLoading ? <PopularTagsSkeleton /> : <PopularTags />}

      {isLoading ? (
        <LatestJobsSkeleton />
      ) : (
        <LatestJobs
          jobs={latestJobs}
          showHeader={true}
          isLoading={false}
          hasSearched={false}
        />
      )}

      <PlatformStats />
      <Footer />
    </>
  );
};

export default Home;
