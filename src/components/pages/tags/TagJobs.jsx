import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import TagHeader from "./TagHeader";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

import { mockJobs } from "../../../data/mockJobs";
import { mockTags } from "../../../data/mockTags";

const TagJobs = () => {
  const { tagName } = useParams();
  const [page, setPage] = useState(1);

  const jobsPerPage = 12;

  const decodedTag = decodeURIComponent(tagName);

  const tag = mockTags.find(
    (t) => t.name.toLowerCase() === decodedTag.toLowerCase()
  );

  const tagJobs = useMemo(() => {
    if (!tag) return [];

    return mockJobs.filter((job) =>
      job.details?.tags?.some(
        (t) => t.toLowerCase() === tag.name.toLowerCase()
      )
    );
  }, [tag]);

  const totalPages = Math.ceil(tagJobs.length / jobsPerPage);

  const jobsToRender = tagJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  if (!tag) return null;

  return (
    <main className="bg-white min-h-screen">
      <TagHeader
        name={tag.name}
        subscribers={tag.subscribers}
        jobsCount={tag.jobs}
      />

      {/* JOB LIST (4 x 3) */}
      <section className="max-w-7xl mx-auto px-4 pt-24">
        <LatestJobs jobs={jobsToRender} showHeader={false} />
      </section>

      {/* PAGINATION */}
      {totalPages >= 1 && (
         <Pagination
                currentPage={page}
                totalPages={15}
                onPageChange={setPage}
                variant="category"
              />
      )}

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default TagJobs;
