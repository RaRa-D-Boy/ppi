import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "../components/navbar/navbar";
import { LogoSlide } from "../components/logoSlider/logoSlide";

export default function HomePage() {
  return (
    <section id="home">
      <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen bg-black w-full">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-full flex items-center justify-start">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/road7.jpg"
            alt="Open road with scenic landscape"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-200/20 pointer-events-none"></div>

          {/* <LogoSlide /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 w-full  lg:max-w-screen-xl">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Building Roads,
            Forging Futures.
            </h1>

            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
