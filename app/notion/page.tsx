import React from "react";

const Notion = () => {
  return (
    <section
      className="min-h-auto w-full bg-white py-12 px-6 md:p-12 lg:p-24"
      id="notion"
    >
      <div className=" flex items-center  pb-12">
        <div>
          {/* <p className="max-w-[150px] p-4 text-center bg-gray-100 text-sm text-green-600">
           Our Story
          </p> */}
          <div className="content py-12  text-3xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-screen-lg">
            Our Story{" "}
          </div>
          <div className="max-w-screen-lg text-xl font-light">
            PPI was formed by experienced investment professionals of African
            heritage who have excelled at leading global firms. Having witnessed
            the precarious state of road infrastructure and its economic impact,
            they are eager to leverage their resources and networks to improve
            the situation for future generations. Currently, PPI is focused on
            completing one to two road projects in Ghana each year to support
            the country’s economic development.
          </div>
        </div>
      </div>
    </section>
  );
};
export default Notion;
