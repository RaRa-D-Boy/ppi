import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "./components/navbar/navbar"
import  {LogoSlide}  from "./components/logoSlider/logoSlide"
import HomePage from "./home/page"
import OurStory from "./ourstory/page"
import ExecutingStrategy from "./executingStrategies/executingStrategy"
import EconomicRationalePage from "./economicRationale/economicRationale"
import {CardGrid} from "./components/grids/grids"

export default function Page() {
  return (
    <>
    <HomePage/>
    <OurStory/>
    <CardGrid/>
    {/* <ExecutingStrategy/> */}
    <EconomicRationalePage/>
    
    </>

  )
}
