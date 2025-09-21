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
    <section className="pt-24 pb-24 md:pb-40 bg-gray-100 lg:px-24 md:px-12 px-4 min-h-screen flex items-center justify-center">
      <div className="container px-4 mx-auto w-full">
        <div className="text-center mb-24 sm:mb-44">
          <span className="bg-gray-100 p-4 w-[300px] text-xs text-center font-medium uppercase text-green-600 mx-auto block mb-8">
            Creative Team
          </span>
        </div>
        <div className="relative z-10 w-full mb-40 text-center">
          <h1 className="font-heading text-4xl md:text-7xl mb-10">"Alone we can do so little, together we can do so much."</h1>
          {/* <span className="text-xl font-medium">Helen Keller</span> */}
        </div>
        <div className="flex flex-wrap -mx-4 relative items-stretch">
          {team.map((member, idx) => (
            <div key={member.name} className="w-full lg:w-1/3 md:px-4 mb-16 lg:mb-0 xl:mt-0 flex">
              <div className="max-w-sm mx-auto relative flex flex-col w-full">
                <div className="absolute top-0 left-0 -mt-2 w-full">
                  <div className="mx-5 rounded-t-xl h-4 bg-gray-200"></div>
                </div>
                <div className="py-14 px-6 3xl:px-12 bg-white rounded-xl relative flex-1 flex flex-col">
                  <div className="flex flex-col items-center text-center flex-1 justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">{member.name}</h4>
                      <div className="mb-4 whitespace-pre-line text-gray-700 text-sm">{member.experience}</div>
                    </div>
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