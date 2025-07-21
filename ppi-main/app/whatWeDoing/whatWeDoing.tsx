import Image from "next/image";
import React from "react";

export default function WhatWeDoing() {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        className="absolute top-0 right-0"
        src="saturn-assets/images/features/star-element-right.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-4 mb-18 items-center">
            <div className="w-full px-4 mb-12 lg:mb-0">
              <div>
                <p className="max-w-[150px] mb-5 p-4 text-center bg-gray-100 text-sm text-green-600 uppercase">
                  Charity
                </p>
                <h1 className="text-7xl leading-tight text-gray-900 font-bold mb-8">
                  <span>What We're Doing</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 min-h-full">
            {/* <div className="w-full xl:w-1/2 px-4 mb-8 xl:mb-0 flex flex-col h-full">
              <div className="relative h-full min-h-full ">
                <Image
                  className="block h-full w-full rounded-3xl object-cover"
                  src="/road6.jpg"
                  alt=""
                  fill
                />
                <div className="absolute top-0 left-0 h-full w-full p-8 md:p-12 backdrop-none  rounded-xl bg-gradient-to-t from-green-700/40 to-transparent">
                  <div className="flex flex-col items-start justify-between h-full max-w-sm w-full">
                    <span className="block mb-3 text-sm text-green-500 font-semibold uppercase">
                      Ready for future
                    </span>
                    <div className="flex-grow"></div>
                    <h3 className="text-lg text-white font-normal uppercase">
                      Building better roads and infrastructure through
                      innovative technology
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="w-full  px-4 flex flex-col h-full">
              <div className="flex flex-wrap h-full min-h-[28rem] -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                  <div className="flex flex-col h-full">
                    <a
                      className="relative block h-full mb-7 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                        <p className="text-sm text-gray-900 mb-10 md:mb-6">
                          • Road Type: Brownfield; feeder roads to major
                          highways
                        </p>
                        <p className="text-sm text-gray-900 mb-10 md:mb-6">
                          • Target Geography: Peri urban but open to rural and
                          urban roads
                        </p>
                        <span className="text-lg font-semibold text-gray-900">
                          EXECUTION STRATEGY
                        </span>
                      </div>
                    </a>
                    <a
                      className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-gray-100 hover:bg-gray-200 transition duration-200"
                      href="#"
                    >
                      <div className="flex flex-col h-full justify-between  pr-16">
                        <p className="text-sm text-gray-900  max-w-sm">
                          For each road, PPI will explore deploying a toll road
                          or a weighbridge to finance maintenance.
                        </p>
                        <p className="py-6 max-w-sm text-sm">
                          {" "}
                          PPI will not operate the roads but will partner with a
                          maintenance company
                        </p>
                        <p className="mb-6 max-w-sm text-sm">
                          {" "}
                          The charity may engage in capacity building
                          initiatives to empower locals to maintain the road and
                          create job
                        </p>
                        <span className="text-lg font-semibold text-gray-900">
                          OPERATION AND MAINTENANCE MODEL
                        </span>
                      </div>
                      {/* <img
                        className="absolute bottom-0 right-0 m-5"
                        src="saturn-assets/images/features/arrow.svg"
                        alt=""
                      /> */}
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <a
                    className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-orange-50 hover:bg-orange-100 transition duration-200"
                    href="#"
                  >
                    <div className="flex h-full flex-col items-start justify-between max-w-sm pr-16">
                      <p className="text-sm text-gray-900 ">
                        • PPI is a charity registered in the US, UK, and Ghana.
                      </p>
                      <p className="py-6 text-sm">
                        • The charity will borrow from the characteristics and
                        discipline of a private equity fund to ensure a
                        transparent and streamlined operations
                      </p>
                      <p className="mb-6 text-sm">
                        • The charity will operate with a commercial mindset,
                        ensuring that capital is allocated efficiently to
                        maximize the socioeconomic benefits of the structure
                      </p>

                      <span className="text-lg font-semibold text-gray-900 uppercase">
                        ABOUT THE CHARITY
                      </span>
                    </div>
                    {/* <img
                      className="absolute bottom-0 right-0 m-5"
                      src="saturn-assets/images/features/arrow.svg"
                      alt=""
                    /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
