"use client";
import React from "react";

const stats = [
  {
    number: "78,401km",
    description: "Ghana’s road network in 2016",
  },
  {
    number: "~750",
    description: "Outstanding road projects across Ghana, as of 2023",
  },
  {
    number: "$1.3Bn",
    description: "Amount required annually for maintenance and improvements",
  },
  {
    number: "2%",
    description: "Nation's population growth, making it more urgent to deliver reliable infrastructure and improved transportation network",
  },
  {
    number: "$272Bn",
    description: "Amount required to achieve target of expanding the road network to 253,000km by 2047, according to the Finance Minister",
  },
  {
    number: "23%",
    description: "Actual expenditure on roads in 2022 vs. the amount budgeted by the Ministry of Roads",
  },
];

export default function EconomicRationalePage() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-16 py-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Ghana's Road Network<br />By the Numbers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 divide-y md:divide-y-0 md:divide-x">
          <div className="flex flex-col gap-12">
            {stats.filter((_, i) => i % 2 === 0).map((stat, i) => (
              <div key={stat.number} className="flex flex-col pt-8 border-t md:border-0">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</div>
                <p className="text-gray-500 text-lg max-w-md">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12">
            {stats.filter((_, i) => i % 2 === 1).map((stat, i) => (
              <div key={stat.number} className="flex flex-col pt-8 border-t md:border-0">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</div>
                <p className="text-gray-500 text-lg max-w-md">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 