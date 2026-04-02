import logo from "../assets/cmxlogo.png";
import phFlag from "../assets/phFlag.png";

import Hero from "./sections/Hero";
import LifeAtCMX from "./sections/LifeAtCMX";
import WhyJoinCarousel from "./sections/WhyJoinCarousel";
import RecruitmentProcess from "./sections/RecruitmentProcess";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HEADER */}
      <div className="w-full flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">

          <img src={logo} alt="Callmax" className="h-10" />

          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">Philippines</span>
            <img src={phFlag} alt="PH Flag" className="h-4 w-auto" />
          </div>

        </div>

        <button className="hidden md:inline-block bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
          Apply Now
        </button>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-[#2f466f] text-white flex justify-center py-3">
        <nav className="flex gap-10 text-md font-medium">
          <a href="#life-at-cmx" className="hover:text-blue-300">Life at CMX</a>
          <a href="#why-join-cmx" className="hover:text-blue-300">Why Join CMX?</a>
          <a href="#recruitment-process" className="hover:text-blue-300">Recruitment Process</a>
          <a href="#contact-us" className="hover:text-blue-300">Contact Us</a>
        </nav>
      </div>

      {/* SECTIONS */}
      <Hero />
      <LifeAtCMX />
      <WhyJoinCarousel />
      <RecruitmentProcess />
      <CTASection />
      <Footer />

    </div>
  );
}