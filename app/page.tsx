import HomePage from "./home/page";
import OurStory from "./ourstory/page";
import ExecutingStrategy from "./executingStrategies/executingStrategy";
import EconomicRationalePage from "./economicRationale/economicRationale";
import { CardGrid } from "./components/grids/grids";
import WhatWeDoing from "./whatWeDoing/whatWeDoing";
import WorkForce from "./team/team";
import { Footer } from "./footer/footer";

export default function Page() {
  return (
    <>
      <HomePage />
      <OurStory />
      <WhatWeDoing />
      <ExecutingStrategy />
      <EconomicRationalePage />
      <WorkForce />
      <Footer/>
    </>
  );
}
