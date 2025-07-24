"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Watkins", logo: "/logos/5.png" },
  { name: "Google", logo: "/logos/2.png" },
  { name: "Ernest", logo: "/logos/3.png" },
  { name: "Control", logo: "/logos/4.png" },
];

// Duplicate the logos for seamless infinite scroll
const scrollingLogos = [...logos, ...logos, ...logos];

export const LogoSlide = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-end z-20 overflow-hidden">
      <motion.div
        className="flex justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        style={{ minWidth: "100%" }}
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {scrollingLogos.map((company, index) => (
          <div
            key={index}
            className="flex items-center  relative  h-[100px] w-[100px] min-w-[200px] min-w-[200px] justify-end"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              layout="fill"
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
