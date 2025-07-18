import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "../components/navbar/navbar";
import { LogoSlide } from "../components/logoSlider/logoSlide";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black w-full">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/road7.jpg"
            alt="Open road with scenic landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Pixelated overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-200/20 pointer-events-none"></div>

          <LogoSlide />
        </div>

        {/* Content */}
        <div className="relative z-10 px-12  lg:px-24  grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
              AI Infrastructure
              <br />
              Powered by
              <br />
              Clean Energy
            </h1>

            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors px-8 py-3"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
