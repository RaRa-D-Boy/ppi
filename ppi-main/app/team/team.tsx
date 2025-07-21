"use client"
import React from "react";

interface TeamMember {
  name: string;
  experience: string;
  education: string;
}

const defaultTeam: TeamMember[] = [
  {
    name: "PAP DIOUF",
    experience:
      "7 years legal and infrastructure experience across developed markets and Africa\nCurrently an attorney at Cleary Gottlieb, one of the global leading law firm\nFocused on Corporate and Financial Matters, and Africa-related transactions\nAdmitted to both the New York and Paris Bars\nPrevious firms includes Linklaters",
    education: "Master of Laws (LL.M.) from Columbia Law School",
  },
  {
    name: "GENEVIEVE SEKWALOR",
    experience:
      "9 years private equity and infrastructure experience across developed markets and Africa\nCurrently an investment professional at CVC Capital Partners, one of the world largest private equity funds with €186bn AUM\nFocused on Sports, Media, and Entertainment\nPrevious firms include USS (UK’s largest pension fund) and Africa Platform Capital",
    education: "MSc. in Finance at Imperial College and BSc. in Economics at University of Surrey",
  },
  {
    name: "MAXWELL NII LARYEA",
    experience:
      "7 years corporate finance and private equity experience in the infrastructure sector across developed markets and Africa\nCurrently an investment professional at Copenhagen Infrastructure Partners (CIP), the world’s largest green energy infrastructure fund with €30bn AUM\nFocused on renewable energy and Power-to-X infrastructure\nPrevious firms include GE Capital and Serengeti Capital Partners",
    education: "MBA at Harvard Business School and BSc. in Business Administration at Ashesi University",
  },
];

const WorkForce = ({ team = defaultTeam }: { team?: TeamMember[] }) => {
  return (
    <section className="pt-24 pb-24 md:pb-40 bg-gray-100 lg:px-24 px-12">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-24 sm:mb-44">
          <div className="mx-4 rounded-full bg-gray-200 h-1 w-1"></div>
          <p className="max-w-[250px] p-4 text-center  uppercase bg-white text-sm text-green-600">Creative TeamY</p>
        </div>
        <div className="relative z-10 max-w-3xl mb-40">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl 3xl:text-7xl mb-10">“Alone we can do so little, together we can do so much.”</h1>
          {/* <span className="text-xl font-medium">Helen Keller</span> */}
        </div>
        <div className="flex flex-wrap -mx-4 relative">
          {team.map((member, idx) => (
            <div key={member.name} className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 xl:mt-0">
              <div className="max-w-sm mx-auto relative">
                <div className="absolute top-0 left-0 -mt-2 w-full">
                  <div className="mx-5 rounded-t-xl h-4 bg-gray-200"></div>
                </div>
                <div className="py-14 px-6 3xl:px-12 bg-white rounded-xl relative">
                  <div className="flex flex-col items-start">
                    <h4 className="text-2xl font-bold mb-4">{member.name}</h4>
                    <div className="mb-4 whitespace-pre-line text-gray-700 text-sm">{member.experience}</div>
                    <div className="font-semibold text-green-800 text-sm">{member.education}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkForce;