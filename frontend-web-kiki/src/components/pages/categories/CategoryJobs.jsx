import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import CategoryHeader from "./CategoryHeader";
import LatestJobs from "../../sections/LatestJobs";
import Pagination from "../../common/Pagination";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

import { mockJobs } from "../../../data/mockJobs";
import { mockCategories } from "../../../data/mockCategories";

const CATEGORY_TAG_MAP = {
  "Web Frontend": ["Frontend", "Web", "React", "UI"],
  "Backend & Database": ["Backend", "API", "Database", "Python"],
  "UI/UX & Product Design": ["UI", "UX", "Design", "Figma"],
  "Machine Learning": ["ML", "Machine Learning", "AI", "Python"],
  "Mobile Application": ["Mobile", "Android", "iOS"],
  "Web Full-Stack": ["Full Stack", "Frontend", "Backend"],
  "QA & DevOps Engineer": ["QA", "DevOps", "Testing", "CI/CD"],
  Security: ["Security", "Cyber", "PenTest"],
};

const CategoryJobs = () => {
  const { categoryId } = useParams();
  const [page, setPage] = useState(1);

  const jobsPerPage = 12;

  const category = mockCategories.find(
    (c) => String(c.id) === String(categoryId)
  );

  const categoryJobs = useMemo(() => {
    if (!category) return [];

    const keywords = CATEGORY_TAG_MAP[category.name] || [];

    return mockJobs.filter((job) =>
      job.details?.tags?.some((tag) =>
        keywords.some((key) =>
          tag.toLowerCase().includes(key.toLowerCase())
        )
      )
    );
  }, [category]);

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

      {/* JOB LIST (4 x 3) */}
      <section className="max-w-7xl mx-auto px-4 pt-24">
        <LatestJobs
          jobs={jobsToRender}
          showHeader={false}
          hasSearched={false}
        />
      </section>

      {/* CATEGORY PAGINATION */}
      <Pagination
        currentPage={page}
        totalPages={15}
        onPageChange={setPage}
        variant="category"
      />

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default CategoryJobs;
