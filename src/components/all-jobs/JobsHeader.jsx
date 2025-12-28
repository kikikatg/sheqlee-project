const JobsHeader = () => {
  return (
    <section className="w-full mt-16 md:mt-24">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4 text-center">

        {/* Title */}
        <h1
          className="
            text-black
            font-semibold
            text-[40px]
            md:text-[40px]
            leading-[1.1]
          "
        >
          All Job Posts
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-6
            text-black
            text-[18px]
            md:text-[24px]
            leading-[1.3]
            max-w-[800px]
            mx-auto
          "
        >
          Browse the latest jobs you can take up right now.
          Use filters to find the best jobs for your skillset.
        </p>

      </div>
    </section>
  );
};

export default JobsHeader;
