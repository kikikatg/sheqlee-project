import { useState } from "react";
import SubNavbar from "../all-jobs/SubNavbar";
import JobsHeader from "../all-jobs/JobsHeader";
import JobsFilter from "../all-jobs/JobsFilter";
import LatestJobs from "../sections/LatestJobs";
import Pagination from "../common/Pagination";
import DeveloperCTA from "../sections/DeveloperCTA";
import Footer from "../footer/Footer";
const AllJobs = () => {
  const [page, setPage] = useState(1);
  return (
    <main className="bg-white">
      <SubNavbar />
      <JobsHeader />
      <JobsFilter />

      {/* 18 jobs total */}
      <LatestJobs limit={18} showHeader={false} />
      <Pagination
        currentPage={page}
        totalPages={40}
        onPageChange={setPage}
      />
      <DeveloperCTA />
      <Footer/>
    </main>
  );
};

export default AllJobs;
