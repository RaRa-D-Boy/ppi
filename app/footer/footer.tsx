import { Facebook, InstagramIcon } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="pt-14 bg-white px-12 lg:px-24">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-between -mx-4 pb-12">
      <div className="hidden lg:block w-full lg:w-auto px-4 mb-2 lg:mb-0">
        <a className="inline-block" href="#">
          <Image
            src="/logo1.png"
            alt="PPI Logo"
            width={120}
            height={60}
            className="w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 object-contain"
          />
        </a>
      </div>
      <div className="w-full lg:w-auto px-4 flex justify-center lg:justify-end">
        <ul className="flex flex-nowrap items-center -mb-2 text-sm">
          <li className="mx-2 mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">About</a></li>
          <li className="mx-2 mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">Company</a></li>
          <li className="mx-2 mb-2 sm:mr-6 lg:mr-16"><a className="font-heading text-black hover:text-gray-100" href="#">Services</a></li>
          <li className="mx-2 mb-2"><a className="font-heading text-black hover:text-gray-100" href="#">Testimonials</a></li>
          {/* <li className="mb-2 mx-2 md:mx-6"><span className="mt-6 sm:mt-0 text-black text-sm ">2025 © PPI</span>          </li> */}
        </ul>
      </div>
    </div>
   
  </div>
</section>
  );
};
