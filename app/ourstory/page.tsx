import React from "react";

const OurStory = () => {
  return (
    <section className="min-h-screen w-full bg-white flex items-center justify-center md:p-12 lg:p-24 px-8">
      <div className="flex items-center justify-center border-b pb-12 w-full">
        <div className="text-center max-w-6xl">
          <span className="bg-gray-100 p-4 w-[300px] text-xs text-center font-medium uppercase text-green-600 mx-auto block mb-8">
            OUR STORY
          </span>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight py-12">
            Empowering Ghana's future through investment in infrastructure
          </h1>
          <div className="text-base font-light">
            PPI was formed by experienced investment professionals of African
            heritage who have excelled at leading global firms Having witnessed
            the precarious state of road infrastructure and its economic impact,
            they are eager to leverage their resources and networks to improve
            the situation for future generations This commitment has led to the
            creation of PPI, with the goal of completing one to two road
            projects in Ghana each year to support the country's economic
            development
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
