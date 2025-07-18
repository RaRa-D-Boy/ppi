"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Efficient Infrastructure Allocation",
    body: "Introducing a new model of building infrastructure to support the efficient allocation of capital to road projects.",
    image: "/strategies/strategy1.jpg",
  },
  {
    title: "Charity Meets Private Equity",
    body: "PPI combines the charity model with private equity discipline unlike any other organization around the world.",
    image: "/strategies/strategy2.jpg",
  },
  {
    title: "Transparent & Accountable Funding",
    body: "Thereby, creating a vehicle that is transparent, fully auditable, and can be held accountable for money given it to execute road infrastructure projects.",
    image: "/strategies/strategy3.jpg",
  },
  {
    title: "Embracing a Commercial Mindset",
    body: "We have an unwavering commitment to work with governments and wider system to embrace the commercial mindset of allocating capital to infrastructure assets traditionally classified as public goods.",
    image: "/strategies/strategy4.jpg",
  },
  {
    title: "Driving Socioeconomic Impact",
    body: "This is geared towards increasing socioeconomic outcomes for society and other relevant stakeholders.",
    image: "/strategies/strategy5.jpg",
  },
];

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

const ExecutingStrategy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = CARD_WIDTH < clientWidth ? clientWidth : CARD_WIDTH;
    scrollRef.current.scrollTo({
      left:
        dir === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center min-h-[60vh] bg-white py-8 px-12 lg:px-24">
      <div className="flex justify-between items-end w-full">
        <div className="content w-full text-7xl leading-tight  ">
          <p className="max-w-[250px] p-4 text-center text-sm uppercase bg-gray-100">
            Executing Strategies
          </p>
          <div className="py-12"> How We Are Doing It. </div>
        </div>
        {/* Carousel Controls */}
        <div className="flex justify-end items-center gap-4 mb-4 ">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="p-2  hover:bg-white/40 text-black transition disabled:opacity-50"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="p-2  hover:bg-white/40 text-black  transition disabled:opacity-50"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        {/* Carousel */}
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto px-0 sm:px-2 md:px-4 py-2 scrollbar-thin scrollbar-thumb-blue-400"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 md:gap-8 min-w-0">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="relative group flex-shrink-0 w-full max-w-[100%] md:max-w-[500px] xl:max-w-[550px] h-[500px] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer min-w-0"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{
                delay: i * 0.15,
                type: "spring" as const,
                stiffness: 100,
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 33vw"
              />
              {/* Default overlay with title */}
              <motion.div
                className="absolute  bottom-0 inset-0 flex flex-col justify-center items-center transition-all duration-300"
                initial={false}
                animate={{
                  backdropFilter: 'blur(0px)',
                  background: 'rgba(0,0,0,0.8)',
                  opacity: 1
                }}
                whileHover={{
                  backdropFilter: 'blur(4px)',
                  background: 'rgba(0,0,0,0.65)',
                  opacity: 1
                }}
              >
                <h3 className="text-5xl p-6 font-semibold text-white mb-2 z-10  transition-all duration-300 group-hover:opacity-0">
                  {card.title}
                </h3>
              </motion.div>
              {/* Body text on hover (using group-hover for visibility) */}
              <div
                className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white  rounded-lg px-4 py-2 text-base font-light inline-block  mt-2">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExecutingStrategy;
