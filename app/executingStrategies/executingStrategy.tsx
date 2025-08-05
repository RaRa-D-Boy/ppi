"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Leveraging AI for High Impact Road Selection",
    body: "PPI has developed proprietory software that uses reasoning AI models to analyse geospatial data in order to identify high impact roads.",
    image: "/strategies/strategy1.jpg",
  },
  {
    title: "Novel Road Maintenance Processes",
    body: "PPI uses a combination of traditional fund-raising approaches and innovative constrcution materials to ensure high quality road maintenance",
    image: "/strategies/strategy2.jpg",
  },
  {
    title: "Embracing A Commercial Mindset For Socio-Economic Impact",
    body: "PPI has an unwavering committment to work with governments and organisations to embrace the commercial mindset of private equity to accessing capital to infrastructure assests in Africa with the ultimate aim of elevating socio-economic  outcomes for African societies",
    image: "/strategies/strategy3.jpg",
  },
  // {
  //   title: "Embracing a Commercial Mindset",
  //   body: "We have an unwavering commitment to work with governments and wider system to embrace the commercial mindset of allocating capital to infrastructure assets traditionally classNameified as public goods.",
  //   image: "/strategies/strategy4.jpg",
  // },
  // {
  //   title: "Driving Socioeconomic Impact",
  //   body: "This is geared towards increasing socioeconomic outcomes for society and other relevant stakeholders.",
  //   image: "/strategies/strategy5.jpg",
  // },
];

function useSlidesPerView() {
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlides(1);
      } else if (window.innerWidth < 1024) {
        setSlides(2);
      } else {
        setSlides(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return slides;
}

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const CARD_WIDTH = 320 + 32; // w-80 + gap-8 (in px)



const ArrowSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

export default function ExecutingStrategy() {
  const [activeIdx, setActiveIdx] = useState(0);
  const slidesPerView = useSlidesPerView();

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? cards.length - slidesPerView : prev - 1));
  };
  const handleNext = () => {
    setActiveIdx((prev) =>
      prev >= cards.length - slidesPerView ? 0 : prev + 1
    );
  };

  // Calculate width percent for each card
  const cardWidth = 100 / slidesPerView;
  // Calculate translateX percent
  const translateX = activeIdx * cardWidth;

  return (
    <section className=" py-12 px-6 md:px-12 lg:px-24 lg:py-24" id="execution">
      <div className="flex flex-wrap -m-4">
        <div className="w-full lg:w-1/3 p-4">
          <div className="flex flex-col justify-end items-start h-full py-12">
            <h1 className="tracking-tight font-heading font-semibold text-3xl md:text-5xl lg:text-7xl  mb-4">Our Strategy.</h1>
            
            
            <div className="flex gap-2 mt-8 ">
              <button
                onClick={handlePrev}
                className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition"
                aria-label="Previous"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 16l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={handleNext}
                className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition"
                aria-label="Next"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-2/3 p-4">
          <div className="relative" style={{ height: 700 }}>
            <div className="absolute left-0 top-0 h-full w-full overflow-x-hidden">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out scrollbar-hide"
                style={{ transform: `translateX(-${translateX}%)` }}
              >
                {cards.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`flex-shrink-0 border-r border-gray-200 ${idx === 0 ? "border-l" : ""} ${idx > 0 ? "bg-gray-50" : ""} flex flex-col justify-between h-full items-center transition-all duration-500`}
                    style={{ minWidth: `${cardWidth}%`, maxWidth: `${cardWidth}%` }}
                  >
                    <div className="flex items-center justify-between w-full mb-6 p-4">
                      <p className="tracking-tight font-semibold">{idx + 1}</p>
                      {idx === activeIdx && (
                        <a href="#" className="text-gray-900 hover:text-gray-800 transition duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 6.66699H7.33333C4.38781 6.66699 2 9.05481 2 12.0003V13.3337M14 6.66699L10 10.667M14 6.66699L10 2.66699" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                    <div className="relative w-full h-[300px] p-2">
                      {idx === activeIdx && item.image && (
                        <Image
                          className="object-cover mb-11 rounded-none shadow-lg"
                          fill
                          src={item.image}
                          alt={item.title}
                        />
                      )}
                    </div>
                    <h2 className="font-heading tracking-tight text-xl font-semibold mb-4 px-4 text-start">{item.title}</h2>
                    <p className="tracking-tight text-gray-700 text-base text-start px-4">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
