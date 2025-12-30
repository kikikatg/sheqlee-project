import React from "react";
import SubNavbar from "../../all-jobs/SubNavbar";
import Footer from "../../footer/Footer";
import CategoryCard from "../../common/CategoryCard";
import { mockCategories } from "../../../data/mockCategories";
import DeveloperCTA from"../../sections/DeveloperCTA";
const Categories = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* ================= SUB NAVBAR ================= */}
      <SubNavbar title="Categories" />

      {/* ================= TITLE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 text-center">
        {/* ICON ABOVE TITLE */}
        <div className="flex justify-center mb-6">
          <img
            src="/icons/categories.svg"
            alt="Categories"
            className="w-[100px] h-[100px]"
          />
        </div>

        {/* TITLE */}
        <h1
          className="
            text-[38px]
            md:text-[56px]
            font-semibold
            leading-[40px]
            text-black
          "
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          All Categories
        </h1>

        {/* SUB HEADER */}
        <p
          className="
            mt-6
            max-w-[882px]
            mx-auto
            text-[20px]
            md:text-[32px]
            leading-[32px]
            md:leading-[44px]
            text-black
          "
          style={{ fontFamily: "Kantumruy Pro" }}
        >
          Job catgories along with thier respective number of   <br/>                                job posted and number of subscribers.
        </p>
      </section>

      {/* ================= CATEGORIES LIST ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {mockCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
       <DeveloperCTA/>
      <Footer />
    </main>
  );
};

export default Categories;
