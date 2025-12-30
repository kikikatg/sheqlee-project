import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryHeader from "./CategoryHeader";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

import { mockJobs } from "../../../data/mockJobs";
import { mockCategories } from "../../../data/mockCategories";

const CategoryJobs = () => {
  const { categoryId } = useParams();
  const [page, setPage] = useState(1);

  const jobsPerPage = 12;

  const category = mockCategories.find(
    (c) => String(c.id) === categoryId
  );

  const categoryJobs = useMemo(() => {
    if (!category) return [];

    return mockJobs.filter((job) =>
      job.title
        .toLowerCase()
        .includes(category.name.toLowerCase().split(" ")[0])
    );
  }, [category]);

  // 🔒 DESIGN REQUIREMENT
  const totalPages = 15;

  const jobsToRender = categoryJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  if (!category) return null;

  return (
    <main className="bg-white min-h-screen">
      <CategoryHeader
        title={category.name}
        icon={category.icon}
        subscribers={category.subscribers}
        description={`Browse ${category.jobsCount} jobs in the ${category.name} category and subscribe for updates.`}
      />

      {/* JOB LIST */}
      <section className="max-w-7xl mx-auto px-4 pt-24">
        <LatestJobs
          jobs={jobsToRender}
          showHeader={false}
          hasSearched={false}
        />
      </section>

      {/* PAGINATION (ENDS AT 15) */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default CategoryJobs;
