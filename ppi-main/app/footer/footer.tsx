import { Facebook, InstagramIcon } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="py-14 bg-white px-12 lg:px-24">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-between -mx-4 pb-12">
      <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
        <a className="inline-block" href="#">
          {/* <img src="acros-assets/logo/logo-acros-white.svg" alt=""> */}
        </a>
      </div>
      <div className="w-full lg:w-auto px-4">
        <ul className="sm:flex flex-wrap items-center -mb-2 text-sm">
          <li className="mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">About</a></li>
          <li className="mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">Company</a></li>
          <li className="mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">Services</a></li>
          <li className="mb-2"><a className="font-heading text-black hover:text-gray-100" href="#">Testimonials</a></li>
        </ul>
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between pt-14 border-t border-gray-200">
      <div className="flex flex-wrap items-center -mb-2">
        <a className="flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-gray-800 hover:bg-gray-700" href="#">
         <Facebook className="text-white"/>
        </a>
        <a className="flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-gray-800 hover:bg-gray-700" href="#">
          <InstagramIcon className="text-white"/>
        </a>
       
      </div>
      <span className="mt-6 sm:mt-0 text-black text-sm ">2025 © PPI</span>
    </div>
  </div>
</section>
  );
};
