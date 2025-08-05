"use client";
import { Tally1, Tally2, Tally3, Tally4, Tally5 } from "lucide-react";
import React from "react";

const sectors = [
  {
    code: "I01",
    icon: <Tally1 />,
    title:  "966",
    description: "Outstanding Road Projects in Africa",
  },
  {
    code: "I02",
    icon: <Tally5 />,
    title: "$10 - 15Bn",
    description: "Is the amount estimated to be needed to execute road construction and maintenance projects across Africa",
  },
  {
    code: "I03",
    icon: <Tally2 />,
    title:  "~2.5% per year",
    description: "is Africa's projected population growth rate, making it more urgent to deliver reliable infrastructure and improved transportation network",
  },
  // {
  //   code: "I04",
  //   icon: (<>
  //       <Tally5 /> <Tally1 />{" "}
  //     </>),
  //   title: "2%",
  //   description: "Nation's population growth, making it more urgent to deliver reliable infrastructure and improved transportation network",

  // },
  // {
  //   code: "I05",
  //   icon: <Tally3 />,
  //   title: "$272Bn",
  //   description: "Amount required to achieve target of expanding the road network to 253,000km by 2047, according to the Finance Minister",

  // },
  // {
  //   code: "I06",
  //   icon: (
  //     <>
  //       <Tally5 /> <Tally2 />{" "}
  //     </>
  //   ),
  //   title: "23%",
  //   description: "Actual expenditure on roads in 2022 vs. the amount budgeted by the Ministry of Roads",

  // },
  // {
  //   code: "I07",
  //   icon: (
  //     <>
  //       <Tally4 />
  //     </>
  //   ),
  //   title: "$9Bn",
  //   description:
  //     "Amount required annually to achieve the 2047 target",
  // },
];

export default function EconomicRationalePage() {
  return (
    <section id="economicrationale">
        <div className="min-h-autp bg-white px-6 md:px-12 lg:px-24 py-12">
      <div className="w-full">
        <div className=" mb-12">
          <div>
            <span className=" bg-gray-100 p-4 min-w-[300px] text-xs  text-center font-medium uppercase text-green-600">
              Economic Rationale
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-start leading-tight py-12">
              Key Statistics
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-16 gap-y-8 divide-y md:divide-y-0 ">
          <div className="flex flex-col gap-8">
            {sectors
              .filter((_, i) => i % 2 === 0)
              .map((sector, i) => (
                <div
                  key={sector.code}
                  className="flex items-start gap-6 pt-8 border-t "
                >
                  {/* <div className="text-xs text-gray-400 w-10 shrink-0 pt-2">[{sector.code}]</div> */}
                  <div className="w-12 h-12 flex items-center text-center justify-center">
                    {sector.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold mb-1">
                      {sector.title}
                    </h2>
                    <p className="text-gray-500 text-sm max-w-md">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-8">
            {sectors
              .filter((_, i) => i % 2 === 1)
              .map((sector, i) => (
                <div
                  key={sector.code}
                  className="flex items-start gap-6 pt-8 border-t "
                >
                  {/* <div className="text-xs text-black w-10 shrink-0 pt-2 font-bold">[{sector.code}]</div> */}
                  <div className="w-12 h-12 flex  text-center items-center justify-center">
                    {sector.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold mb-1">
                      {sector.title}
                    </h2>
                    <p className="text-gray-500 text-sm max-w-md">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  
  );
}
