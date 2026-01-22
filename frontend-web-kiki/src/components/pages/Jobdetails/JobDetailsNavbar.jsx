import SubNavbar from "../../all-jobs/SubNavbar";

const JobDetailsNavbar = ({ job }) => {
  return (
    <div className="w-full bg-[#FCFCFC] border-b border-gray-200 hidden sm:block">
      <div className="h-[75px] flex items-center">
        <SubNavbar
          crumbs={[
            {
              label: job.category || "Design & Art",
              href: `/categories/${job.categorySlug || "design-art"}`,
            },
            {
              label: job.title,
              active: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default JobDetailsNavbar;
