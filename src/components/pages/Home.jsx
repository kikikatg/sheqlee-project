import { useState } from "react";
import Hero from "../layout/Hero";
import PopularTags from "../sections/PopularTags";
import LatestJobs from "../sections/LatestJobs";
import PlatformStats from "../sections/PlatformStats";
import Footer from "../footer/Footer";
import PostAuthModal from "../modals/PostAuthModal";
import { mockJobs } from "../../data/mockJobs";

const Home = ({ showAuthModalEnabled = true }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Hero
        openAuthModal={
          showAuthModalEnabled
            ? () => setShowAuthModal(true)
            : undefined
        }
      />

      {showAuthModalEnabled && showAuthModal && (
        <PostAuthModal onClose={() => setShowAuthModal(false)} />
      )}

      <PopularTags />
      <LatestJobs jobs={mockJobs} limit={9} showHeader />
      <PlatformStats />
      <Footer />
    </>
  );
};

export default Home;
