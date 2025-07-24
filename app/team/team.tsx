"use client"
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TeamMember {
  name: string;
  experience: string;
  education: string;
  role?: string;
}

const defaultTeam: TeamMember[] = [
  {
    name: "PAP DIOUF",
    role: "Legal & Infrastructure Expert",
    experience:
      "7 years legal and infrastructure experience across developed markets and Africa. Currently an attorney at Cleary Gottlieb, one of the global leading law firm. Focused on Corporate and Financial Matters, and Africa-related transactions. Admitted to both the New York and Paris Bars. Previous firms includes Linklaters",
    education: "Master of Laws (LL.M.) from Columbia Law School",
  },
  {
    name: "GENEVIEVE SEKWALOR",
    role: "Private Equity & Infrastructure Professional",
    experience:
      "9 years private equity and infrastructure experience across developed markets and Africa. Currently an investment professional at CVC Capital Partners, one of the world largest private equity funds with €186bn AUM. Focused on Sports, Media, and Entertainment. Previous firms include USS (UK's largest pension fund) and Africa Platform Capital",
    education: "MSc. in Finance at Imperial College and BSc. in Economics at University of Surrey",
  },
  {
    name: "MAXWELL NII LARYEA",
    role: "Corporate Finance & Private Equity Expert",
    experience:
      "7 years corporate finance and private equity experience in the infrastructure sector across developed markets and Africa. Currently an investment professional at Copenhagen Infrastructure Partners (CIP), the world's largest green energy infrastructure fund with €30bn AUM. Focused on renewable energy and Power-to-X infrastructure. Previous firms include GE Capital and Serengeti Capital Partners",
    education: "MBA at Harvard Business School and BSc. in Business Administration at Ashesi University",
  },
];

const WorkForce = ({ team = defaultTeam }: { team?: TeamMember[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };

  const currentMember = team[currentIndex];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden" id="team">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/team1.jpg"
          alt="Team background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-12 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center mb-6">
            <div className="w-1 h-1 bg-white/60 rounded-full mx-2"></div>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-sm font-medium text-green-400 uppercase tracking-wide border border-white/20">
              Executive Team
            </span>
            <div className="w-1 h-1 bg-white/60 rounded-full mx-2"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 max-w-4xl">
            "Alone we can do so little, together we can do so much."
          </h2>
          <p className="text-lg text-white/80">Helen Keller</p>
        </div>

        {/* Team Member Card */}
        <div className="w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20">
            <div className="flex flex-col h-full">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mb-6" />
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                {currentMember.experience}
              </p>
              <div className="mt-auto">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  {currentMember.name}
                </h4>
                <p className="text-sm sm:text-base text-green-400 font-medium mb-2">
                  {currentMember.role}
                </p>
                <p className="text-xs sm:text-sm text-white/70">
                  {currentMember.education}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
                aria-label="Next team member"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-green-400 scale-125"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Team Member Counter */}
          <div className="mt-6">
            <p className="text-sm text-white/60">
              {currentIndex + 1} of {team.length} team members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkForce;