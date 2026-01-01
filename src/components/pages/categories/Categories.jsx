import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import CategoryCard from "../../common/CategoryCard";
import { mockCategories } from "../../../data/mockCategories";
import DeveloperCTA from "../../sections/DeveloperCTA";

const Categories = () => {
  return (
    <main className="bg-white min-h-screen">

      <SubNavbar
        crumbs={[
          { label: "Categories", href: "/categories", active: true },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        <div className="flex justify-center mb-6">
          <img src="/icons/categories.svg" className="w-[100px] h-[100px]" />
        </div>

        <h1 className="text-[38px] md:text-[56px] font-semibold">
          All Categories
        </h1>

        <p className="mt-6 max-w-[882px] mx-auto text-[20px] md:text-[32px]">
          Job categories along with their respective number of jobs and subscribers.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {mockCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default Categories;
